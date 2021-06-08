import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Button,
  Text,
  Input,
  Label,
  Divider,
  Flex,
  // Select,
} from 'theme-ui';
import { useStoreState } from 'easy-peasy';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';

import { createEntity, deleteEntity, loadEntity } from '../utils/models';

import ApprovalFormBase from './ApprovalCreate';
import Field from './Field';
import Modal from './Modal';
import PageHeader from './PageHeader';
import NavLink from './NavLink';

export interface States {
  total_pages: number;
  total_entries: number;
  states: StateElement[];
  page_number: number;
}

export interface StateElement {
  state: StateState;
  flow: Flow;
  creator: Creator;
}

export interface Creator {
  updated_at: string;
  name: string;
  inserted_at: string;
  id: string;
  email_verify: boolean;
  email: string;
}

export interface Flow {
  updated_at: string;
  name: string;
  inserted_at: string;
  id: string;
}

export interface StateState {
  updated_at: string;
  state: string;
  order: number;
  inserted_at: string;
  id: string;
}

export interface StateFormProps {
  content: StateElement[];
  onSave: any;
  onDelete: any;
  hidden?: boolean;
  onAttachApproval?: any;
  dialog?: any;
}

const StatesForm = (props: StateFormProps) => {
  // const [stat, setStat] = useState('');

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showApproval, setShowApproval] = useState<boolean>(false);
  // const { addToast } = useToasts();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const changeForm = (data: any) => {
    props.onAttachApproval(data);
    setShowApproval(true);
    toggleModal();
  };

  const onDeleteFlow = (_id: any) => {
    props.onDelete(_id);
  };

  return (
    <Box p={2}>
      <Text as="h4" variant="sectiontitle" sx={{ mb: 2 }} pb={2}>
        All States {showApproval}
      </Text>
      {props.content && (
        <Box
          mb={4}
          sx={{
            borderBottom: 'solid 1px',
            borderColor: 'gray.2',
          }}>
          {props.content.map((c: StateElement, index) => (
            <Flex
              sx={{
                p: 3,
                bg: 'gray.0',
                border: 'solid 1px',
                borderBottom: 0,
                borderColor: 'gray.4',
              }}>
              <Text mr={2} sx={{ color: 'gray.6', fontWeight: 300 }}>
                {index + 1}
              </Text>
              <Text
                sx={{ fontWeight: 'heading', color: 'gray.9' }}
                key={c.state.id}>
                {c.state.state}
              </Text>
              <Text onClick={() => changeForm(c.state)} as="h5" mx={5}>
                Add Approval
              </Text>
              <Text
                onClick={() => onDeleteFlow(c.state.id)}
                sx={{
                  ml: 'auto',
                  fontSize: 0,
                  fontWeight: 600,
                  fontFamily: 'heading',
                  textTransform: 'uppercase',
                }}>
                Delete
              </Text>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

const FlowForm = () => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [edit, setEdit] = useState<boolean>(false);
  const [approval, setApproval] = useState<boolean>(false);
  const [addState, setAddState] = useState<boolean>(false);
  const [content, setContent] = useState<StateElement[]>();
  const [flow, setFlow] = useState<Flow>();

  const token = useStoreState((state) => state.auth.token);

  const { addToast } = useToasts();

  // determine edit state based on URL
  const router = useRouter();
  const cId: string = router.query.id as string;

  const onAttachApproval = (_d: any) => {
    setApproval(!approval);
    console.log('onAttachApproval', _d);
  };

  const closeAddState = () => {
    //
  };
  /**
   * Map states to types, and states
   * @param data
   */
  const loadStatesSuccess = (data: any) => {
    const res: States = data;
    setContent(res.states);
  };

  const loadFlowSuccess = (data: any) => {
    const res: Flow = data.flow;
    setFlow(res);
    setValue('name', res?.name);
  };

  /**
   * Load all states for a particular Flow
   * @param id flow id
   * @param t  token
   */
  const loadStates = (id: string, t: string) => {
    const tok = token ? token : t;
    loadEntity(tok, `flows/${id}/states`, loadStatesSuccess);
  };

  /**
   * Load all states for a particular Flow
   * @param id flow id
   * @param t  token
   */
  const loadFlow = (fId: string, t: string) => {
    const tok = token ? token : t;
    loadEntity(tok, `flows/${fId}`, loadFlowSuccess);
  };

  /**
   * Create State
   * @param data Form Data
   */
  const CreateState = (data: any) => {
    createEntity(data, `flows/${cId}/states`, token, onCreateState);
  };

  /**
   * Delete State
   * @param data Form Data
   */
  const deleteState = (fId: any) => {
    deleteEntity(`states/${fId}`, token);

    addToast('Deleted a flow', { appearance: 'error' });

    loadStates(cId, token);
  };

  const onCreateState = (_x: any) => {
    if (cId && token) {
      loadStates(cId, token);
    }
  };

  /**
   * Submit Form
   * @param data Form Data
   */
  const onSubmit = (data: any) => {
    createEntity(data, 'flows', token);
  };

  useEffect(() => {
    if (cId && cId.length > 0) {
      setEdit(true);
      loadStates(cId, token);
      loadFlow(cId, token);
    }
  }, [cId, token]);

  return (
    <Box>
      <PageHeader title={cId ? 'Edit Flows' : 'Create Flows'}>
        <Box sx={{ ml: 'auto', mr: 5 }}>
          <NavLink href="/content-types/new" variant="btnSecondary">
            + New Variant
          </NavLink>
        </Box>
      </PageHeader>

      <Box>
        <Container variant="layout.pageFrame" data-flow={flow?.id}>
          <Box>
            <Box mx={0} mb={3} as="form" onSubmit={handleSubmit(onSubmit)}>
              <Field
                name="name"
                label="Name"
                defaultValue=""
                register={register}
              />
              <Button variant="btnPrimary" type="submit" mt={3}>
                Save
              </Button>
            </Box>
            <Divider sx={{ color: 'gray.3', my: 4 }} />
            <Box mt={2}>
              <Modal isOpen={approval} onClose={() => setAddState(false)}>
                <ApprovalFormBase
                  closeModal={() => setApproval(false)}
                  isOpen={approval}
                  states={content}
                  parent={cId}
                />
              </Modal>

              {edit && content && (
                <StatesForm
                  onAttachApproval={onAttachApproval}
                  content={content}
                  // dialog={dialog2}
                  onSave={CreateState}
                  onDelete={deleteState}
                />
              )}

              <Button variant="btnSecondary" onClick={() => setAddState(true)}>
                Add State
              </Button>

              <Modal
                isOpen={addState}
                onClose={() => setAddState(false)}
                label="ModalX"
                aria-label="Add New State">
                <Box p={4}>
                  <Box>
                    <Label>Add New State</Label>
                    <Input
                      placeholder="New State Name"
                      // onChange={updateState}
                    />
                  </Box>
                  <Button variant="btnPrimary" sx={{ mr: 2 }}>
                    Add State
                  </Button>
                  <Button
                    type="button"
                    variant="btnSecondary"
                    onClick={() => closeAddState}>
                    Cancel
                  </Button>
                </Box>
              </Modal>
            </Box>
            {errors.exampleRequired && <Text>This field is required</Text>}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default FlowForm;
