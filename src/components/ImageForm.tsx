import React, { useState } from 'react';
import { Box, Flex, Button, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';

import { useStoreState } from 'easy-peasy';

// import { Asset } from '../utils/types';
import { Label, Input } from 'theme-ui';
import { createEntityFile } from '../utils/models';
import { Spinner } from 'theme-ui';

export interface IImageForm {
  onSuccess?: any;
}

const Form = (props: IImageForm) => {
  const { register, handleSubmit } = useForm();
  const token = useStoreState((state) => state.auth.token);
  const [loading, setLoading] = useState<boolean>(false);
  const onImageUploaded = (i: any) => {
    setLoading(false);
    props.onSuccess(i);
  };

  const onSubmit = (data: any) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('image', data.file[0]);
    formData.append('tag', 'file');
    createEntityFile(formData, token, 'images', onImageUploaded);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} py={3} mt={4}>
      {loading && <Spinner width={32} color="primary" />}
      <Text mb={3}>Upload Files</Text>
      <Box mx={-2} mb={3}>
        <Input
          id="name"
          // name="name"
          type="hidden"
          // ref={register}
          {...register('name')}
        />
        <Label htmlFor="name" mb={1}>
          File
        </Label>
        <Input
          id="file"
          // name="file"
          type="file"
          // ref={register}
          {...register('file')}
        />
      </Box>
      <Flex mx={-2} mt={2}>
        <Button type="submit" ml={2}>
          Upload
        </Button>
      </Flex>
    </Box>
  );
};
export default Form;
