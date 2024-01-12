import React, { useEffect, useState } from 'react';

import { useStoreState, useStoreActions } from 'easy-peasy';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { Box, Text, Flex } from 'theme-ui';
import { Button, Alert, Close, Spinner } from 'theme-ui';
import { Label, Select } from 'theme-ui';

import { loadEntity, updateEntity } from '../utils/models';

import Field from './Field';

// Generated by https://quicktype.io

export interface Profile {
  allergies?: string[];
  profile: ProfileClass;
  risks?: string[];
}

export interface ProfileClass {
  activity_level_id: string;
  calory_range_id: string;
  dob: string;
  gender: string;
  goal_id: string;
  height: number;
  menu_id: string;
  mobile_number: string;
  profile_id: string;
  weight: number;
}

const ProfileBasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = useStoreState((state) => state.auth.token);
  // const token = useSelector(({ login }: any) => login.token);
  // const dispatch = useDispatch();
  const addMacros = useStoreActions((actions: any) => actions.mealtypes.add);
  const setMacros = useStoreActions((actions: any) => actions.mealtypes.set);
  const allMacros = useStoreState((state) => state.mealtypes.items);

  const [ready, setReady] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const onCreate = (d: any) => {
    setSuccess(true);

    if (d && d.id) {
      Router.push(`/user-profile`);
    }
    addMacros(d);
  };

  const onSubmit = (data: any) => {
    const submitter = {
      profile: data,
    };
    updateEntity('commit_profile', submitter, token, onCreate);
  };

  useEffect(() => {
    console.log('errors', errors);
  }, [errors]);

  const loadDataSuccess = (data: any) => {
    const res: any[] = data.macros;
    setMacros(res);
  };

  useEffect(() => {
    // check if token is there
    // const tokenInline = cookie.get('token') || false;
    //
    if (token) {
      setReady(true);
      loadEntity(token, 'macros', loadDataSuccess);
    }
  }, [token]);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} py={3} mt={4}>
      {!ready && <Spinner />}
      {success && (
        <Alert>
          Category created succesfully!
          <Close ml="auto" mr={-2} />
        </Alert>
      )}

      <Box>
        <Text variant="pagetitle">Add Meal Types</Text>

        <Box mx={0} mb={3} as="form" onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="name"
            label="Name"
            defaultValue="Your Full Name"
            register={register}
          />

          <Field
            name="dob"
            label="Birthday"
            defaultValue="1992-09-24"
            register={register}
          />
          <Label>
            <Select
              // name="gender"
              // ref={register({ required: true })}
              {...register('gender', { required: true })}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </Label>
          <Box py={4}>
            <Text variant="pagetitle">My Profile</Text>
            <Flex>
              <Field
                name="calories"
                label="Calories"
                defaultValue="2400"
                register={register}
              />
            </Flex>
            <Field
              name="height"
              label="Height"
              defaultValue="174cm"
              register={register}
            />
            <Field
              name="weight"
              label="Weight"
              defaultValue="69kg"
              register={register}
            />
          </Box>
          <Button type="submit" ml={2} mt={3}>
            Update Profile
          </Button>
        </Box>
      </Box>
      <Button>Create</Button>

      {allMacros &&
        allMacros.length > 0 &&
        allMacros.map((m: any) => (
          <Text key={m?.name} variant="tag">
            {m.name}
          </Text>
        ))}
    </Box>
  );
};
export default ProfileBasicForm;