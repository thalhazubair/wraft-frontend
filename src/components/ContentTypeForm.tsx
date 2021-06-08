import React, { useEffect, useState } from 'react';
import { Box, Flex, Button, Text } from 'theme-ui';

import { Label, Input, Select } from 'theme-ui';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useStoreState } from 'easy-peasy';

import { IFlow, ICreator } from './FlowList';
import { ContentType } from '../utils/types';
import PageHeader from './PageHeader';

import {
  loadEntity,
  createEntity,
  loadEntityDetail,
  updateEntity,
  deleteEntity,
} from '../utils/models';

import Field from './Field';
import FieldColor from './FieldColor';
import FieldText from './FieldText';
import FieldEditor from './FieldEditor';

export interface IFlowItem {
  flow: IFlow;
  creator: ICreator;
}

// Generated by https://quicktype.io

export interface Layouts {
  total_pages: number;
  total_entries: number;
  page_number: number;
  layouts: Layout[];
}

export interface Layout {
  width: number;
  updated_at: string;
  unit: string;
  slug_file: string;
  slug: string;
  screenshot: string;
  name: string;
  inserted_at: string;
  id: string;
  height: number;
  engine: Engine;
  description: string;
}

export interface Engine {
  updated_at: string;
  name: string;
  inserted_at: string;
  id: string;
  api_route: string;
}

// Generated by https://quicktype.io
export interface FieldTypeList {
  total_pages: number;
  total_entries: number;
  page_number: number;
  field_types: FieldType[];
}

export interface FieldType {
  updated_at: string;
  name: string;
  inserted_at: string;
  id: string;
}

export interface ILayout {
  width: number;
  updated_at: string;
  unit: string;
  slug: string;
  name: string;
  id: string;
  height: number;
  description: string;
}

export interface IField {
  id: string;
  name: string;
  layout_id: string;
  layout: ILayout;
  description: string;
}

export interface IFieldItem {
  name: string;
  type: string;
}

export interface FieldTypeItem {
  key: string;
  name?: string;
  field_type_id: string;
}

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm();
  const token = useStoreState((state) => state.auth.token);

  const [fields, setFields] = useState([]);
  // const [contents, setContents] = useState<Array<IField>>([]);
  const [content, setContent] = useState<ContentType>();
  const [layouts, setLayouts] = useState<Array<ILayout>>([]);
  const [flows, setFlows] = useState<Array<IFlowItem>>([]);
  const [fieldtypes, setFieldtypes] = useState<Array<FieldType>>([]);

  const router = useRouter();
  const cId: string = router.query.id as string;

  const addField = () => {
    console.log('[addField]', fields);
    setFields((fields) => {
      // DON'T USE [...spread] to clone the array because it will bring back deleted elements!
      const outputState: any = fields.slice(0);
      outputState.push('');
      return outputState;
    });
  };

  const addFieldVal = (val: any) =>
    setFields((fields) => {
      // DON'T USE [...spread] to clone the array because it will bring back deleted elements!
      const outputState: any = fields.slice(0);
      outputState.push({ name: val.name, value: val.value });
      return outputState;
    });

  const removeField = (did: number) =>
    setFields((fields) => {
      const outputState = fields.slice(0);
      deleteField(did, outputState);
      // `delete` removes the element while preserving the indexes.
      delete outputState[did];
      return outputState;
    });

  // const onContentTypeSuccess = (data: any) => {
  //   const res: IField[] = data.content_types;
  //   setContents(res);
  // };

  // const loadData = (token: string) => {
  //   loadEntity(token, 'content_types', onContentTypeSuccess);
  // };

  const deleteField = (id: number, fields: any) => {
    const deletable = fields[id];
    const deletableId = deletable.value.id;
    deleteEntity(`/content_type_fields/${deletableId}`, token);
  };

  const setContentDetails = (data: any) => {
    const res: ContentType = data;
    setContent(res);
    if (res && res.content_type) {
      console.log('content_type', res);

      setValue('name', res.content_type.name);
      setValue('desc', res.content_type.decription);
      setValue('prefix', res.content_type.prefix);
      setValue('layout_id', res.content_type.layout?.id || undefined);
      setValue('edit', res.content_type.id);
      setValue('color', res.content_type.color);
    }
  };

  const loadDataDetalis = (id: string, t: string) => {
    const tok = token ? token : t;
    loadEntityDetail(tok, `content_types`, id, setContentDetails);
    return false;
  };

  // Layouts
  const loadLayoutsSuccess = (data: any) => {
    const res: ILayout[] = data.layouts;
    setLayouts(res);
  };

  const loadLayouts = (t: string) => {
    loadEntity(t, 'layouts', loadLayoutsSuccess);
    loadFieldTypesSuccess;
  };

  /**
   * All Available Field Types
   */
  const loadFieldTypesSuccess = (data: any) => {
    const res: FieldTypeList = data;
    setFieldtypes(res.field_types);
  };

  const loadFieldTypes = (token: string) => {
    loadEntity(token, 'field_types', loadFieldTypesSuccess);
  };

  const loadFlowsSuccess = (data: any) => {
    const res: IFlowItem[] = data.flows;
    setFlows(res);
  };

  const loadFlows = (token: string) => {
    loadEntity(token, 'flows', loadFlowsSuccess);
  };

  const formatFields = (fields: any) => {
    console.log('👙 fields', fields);
    let fieldsMap: any = [];

    fields &&
      fields.length > 0 &&
      fields.map((item: any) => {
        // console.log('item', item)
        const fid: string = item && item.value && item.value.field_type.id;
        const it: FieldTypeItem = {
          key: item.name,
          field_type_id: fid,
        };
        fieldsMap.push(it);
      });
    return fieldsMap;
  };

  const onSuccess = (d: any) => {
    console.log('d', d);
  };

  const onSubmit = (data: any) => {
    const sampleD = {
      name: data.name,
      layout_uuid: data.layout_id,
      fields: formatFields(fields),
      description: data.desc,
      prefix: data.prefix,
      flow__uuid: data.flow_id,
      color: data.color,
    };

    const isUpdate = data.edit != 0 ? true : false;
    if (isUpdate) {
      console.log('[isUpdate]', isUpdate);
      updateEntity(`content_types/${data.edit}`, sampleD, token, onSuccess);
    } else {
      console.log('[isUpdate]', sampleD);
      createEntity(sampleD, 'content_types', token, onSuccess);
    }
  };

  const loadFields = () => {
    if (content && content.content_type) {
      dataFiller(content.content_type.fields);
    }
  };

  const dataFiller = (entries: any) => {
    const keys = Object.entries(entries);
    keys.forEach((m: any) => {
      addFieldVal({ name: m[0], value: m[1] });
    });
  };

  useEffect(() => {
    loadFields();
  }, [content]);

  // cId

  useEffect(() => {
    if (cId) {
      setValue('edit', cId);
      loadDataDetalis(cId, token);
    }
  }, [cId, token]);

  const onFieldsSave = (fds: any) => {
    console.log('saved fields', fds, fields);
    setFields([]);
    // let newFields:any = []
    // format and replae existing fields
    fds?.data?.fields?.forEach((el: any) => {
      // el {name: "name", type: "e614e6d8-eaf1-469f-89e0-f23589d0bb7b"}
      const ff = fieldtypes.find((f: any) => f.id === el.type);
      const fff = { field_type: ff, name: el.name };
      const fieldType = { value: fff, name: el.name };
      addFieldVal(fieldType);
    });
  };

  const onChangeFields = (_e: any, _name: string) => {
    console.log('updating ', _name, _e);
    setValue(_name, _e);
    // const sampleTheme: themeObject = {
    //   ...theme,
    //   [_name]: _e,
    // };
    // // setTheme(sampleTheme);
  };

  useEffect(() => {
    // if token
    if (token) {
      // loadData(token);
      loadLayouts(token);
      loadFlows(token);
      loadFieldTypes(token);
    }
  }, [token]);

  return (
    <Box>
      <PageHeader
        title={`${cId ? 'Edit' : 'New '} Variant`}
        desc="Manage Variants">
        <Box />
      </PageHeader>
      <Flex>
        <Box sx={{ minWidth: '60ch'}}>
          <Box mx={0} mb={3} as="form" onSubmit={handleSubmit(onSubmit)}>
            <Flex variant="layout.pageFrame">
              <Box sx={{ flexGrow: 1 }}>
                <Box>
                  <Field
                    register={register}
                    label="Name"
                    name="name"
                    defaultValue=""
                    placeholder="Variant Name"
                  />
                </Box>
                <Box>
                  <FieldText
                    register={register}
                    label="Description"
                    name="desc"
                    defaultValue="Something to guide the user here"
                  />
                </Box>
                <Box>
                  <Field
                    register={register}
                    label="Prefix"
                    name="prefix"
                    defaultValue=""
                  />
                </Box>
                <Box>
                  <FieldColor
                    register={register}
                    label="Color"
                    name="color"
                    defaultValue="#000"
                    onChangeColor={onChangeFields}
                  />
                </Box>
                <Box px={0} pb={3}>
                  <Label htmlFor="layout_id" mb={1}>
                    Layout
                  </Label>
                  <Select
                    id="layout_id"
                    name="layout_id"
                    ref={register({ required: true })}>
                    {layouts &&
                      layouts.length > 0 &&
                      layouts.map((m: any) => (
                        <option value={m.id} key={m.id}>
                          {m.name}
                        </option>
                      ))}
                  </Select>
                </Box>
                <Box px={0} pb={3}>
                  <Label htmlFor="flow_id" mb={1}>
                    Flow
                  </Label>
                  <Select
                    id="flow_id"
                    name="flow_id"
                    defaultValue=""
                    ref={register({ required: true })}>
                    {flows &&
                      flows.length > 0 &&
                      flows.map((m: any) => (
                        <option value={m.flow.id} key={m.flow.id}>
                          {m.flow.name}
                        </option>
                      ))}
                  </Select>
                </Box>
                <Box sx={{ display: 'none' }}>
                  <Input
                    id="edit"
                    name="edit"
                    defaultValue={0}
                    hidden={true}
                    ref={register({ required: true })}
                  />
                </Box>
              </Box>
              {errors.exampleRequired && <Text>This field is required</Text>}
            </Flex>

            <Box sx={{ px: 4 }}>
              <Button variant="btnPrimaryLarge">Save</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} variant="layout.pageFrame">
          {cId && (
            <Box mb={2}>
              <Text as="h4" variant="sectionTitle">
                Manage
              </Text>
            </Box>
          )}

          <FieldEditor
            fields={fields}
            fieldtypes={fieldtypes}
            removeField={removeField}
            addField={addField}
            onSave={onFieldsSave}
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default Form;
