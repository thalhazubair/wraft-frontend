import React, { useEffect, useState } from 'react';
import { Box, Flex, Button, Text, Image, Spinner } from 'theme-ui';
import { useForm } from 'react-hook-form';

import { Label, Select } from 'theme-ui';

import Field from './Field';
import { loadEntity, updateEntityFile } from '../utils/models';
import { useStoreState } from 'easy-peasy';

import Modal, { Styles } from 'react-modal';
// import NavLink from './NavLink';
import { useToasts } from 'react-toast-notifications';
import ImageCropper from './ImageCropper';

export const defaultStyle: Styles = {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(154, 160, 181, 0.5)',
  },
  content: {
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%',
    width: '50%',
    maxWidth: '300px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '8px',
    outline: 'none',
    padding: 0,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
};

export interface Profile {
  uuid: null;
  user: User;
  profile_pic: null;
  name: string;
  gender: null;
  dob: string;
}

export interface User {
  id: string;
  email: string;
}

// Generated by https://quicktype.io

export interface IAccount {
  updated_at: string;
  role: string;
  profile_pic: string;
  dob?: string;
  name: string;
  inserted_at: string;
  id: string;
  email_verify: boolean;
  email: string;
}

// interface IPreviewImage {
//   prevImage: any;
//   prevImageFile: any;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const token = useStoreState((state) => state.auth.token);
  const [me, setMe] = useState<IAccount>();
  const [profile, setProfile] = useState<Profile>();
  const [image, setImage] = useState<any>();
  const [imagePreview, setImagePreview] = useState<string>();
  // const [imageTemp, setImageTemp] = useState<any>();
  // const [imageSaved, setImageSaved] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [profileImageModal, setProfileImageModal] = useState<boolean>(false);

  const { addToast } = useToasts();

  const [showModal, setModal] = useState<boolean>(false);
  function closeModal() {
    setModal(false);
    setProfileImageModal(false);
  }

  function toggleModal() {
    setModal(!showModal);
    const m: IAccount = {
      updated_at: '',
      role: '',
      profile_pic: '',
      dob: '',
      name: '',
      inserted_at: '',
      id: '',
      email_verify: false,
      email: '',
    };
    setMe(m);
  }

  const [cropImage, setCroppedImage] = useState<File>(); // for file submit
  // const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    // console.log('setPreviewImage', image, imagePreview);
  }, [image, imagePreview]);

  // const setPreviewImage = ({ prevImage, prevImageFile }: IPreviewImage) => {
  //   console.log('setPreviewImage', prevImage);
  //   setCroppedImage(prevImageFile);
  //   setImageTemp(prevImage);
  //   // toggleModal();
  //   setEdit(!isEdit);
  //   setImagePreview(prevImage);
  //   setImageSaved(true);
  // };

  const toggleEdit = () => {
    setEdit(!isEdit);
    setImagePreview('');
  };

  // const [showDate, setShowDate] = useState<boolean>(false);
  // const profilex = useStoreState(state => state.profile.data);
  // const dispatch = useDispatch();

  const onUpdate = (d: any) => {
    setSaving(false);
    console.log('Updated', d);
    console.log('me', me);

    addToast('Saved Successfully', { appearance: 'success' });
  };

  // const toggleDate = () => {
  //   setShowDate(!showDate);
  // };

  /**
   * Submit Form
   * @param data Form Data
   */
  const onSubmit = (data: any) => {
    // const id: string = me && me.id;

    console.log('🔥🔥🔥data.profile_pic🔥', data);

    setSaving(true);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('dob', data.dob);

    if (cropImage) {
      formData.append('profile_pic', cropImage);
    }

    formData.append('gender', data.gender);

    updateEntityFile(`profiles`, formData, token, onUpdate);
  };

  // const _onMe = (data: any) => {
  //   const meme: IAccount = data;
  //   console.log('Me', meme);
  //   setMe(meme);
  // };

  // const onCropped = (_cp: any) => {
  //   setPreviewImage(_cp);
  // };

  const onOrg = (data: Profile) => {
    setProfile(data);

    if (data) {
      setValue('name', data.name);

      toggleModal();

      if (data.dob) {
        setValue('dob', data.dob);
      }
      setValue('gender', data.gender);
      const img = data?.profile_pic;
      setImage(img);
    }
  };

  /**
   * Catch update response
   * @param respo
   */
  const onUpdated = (respo: any) => {
    console.log('response', respo);
    addToast('Image Updated', { appearance: 'success' });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onCroppedImage = (e: any, f: any) => {
    console.log('cropped', e, f);
    setCroppedImage(f);

    // setProfileImageModal(!profileImageModal);

    // setSaving(true);

    const formData = new FormData();
    // formData.append('name', 'Tx');
    // formData.append('dob', data.dob);

    if (f) {
      formData.append('profile_pic', f);
    }

    updateEntityFile(`profiles`, formData, token, onUpdated);
  };

  useEffect(() => {
    if (token) {
      loadEntity(token, `profiles`, onOrg);
    }
  }, [token]);

  // const getBase64 = (file: any) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  // useEffect(() => {
  //   try {
  //     if (imageTemp && imageTemp.size > 0) {
  //       getBase64(imageTemp).then((_e: any) => {
  //         console.log('imageTemp', _e);
  //         setImagePreview(_e);
  //       });
  //     }
  //   } catch (error) {
  //     console.log('errr', error);
  //   }
  // }, [imageTemp]);

  return (
    <Box py={3} mt={4} pl={4} variant="w50">
      {/* <Box sx={{ pb: 5 }}>
        <Text variant="pagetitle" sx={{ mb: 0 }}>
          My Account
        </Text>
        <Text sx={{ fontSize: 1 }}>Your account settings</Text>
      </Box> */}
      <Box variant="w100">
        <Flex variant="w100">
          <Box variant="w100">
            <Flex>
              <Box sx={{ pl: 4 }}>
                <Flex>
                  {profile && (
                    <Flex
                      sx={{
                        borderRadius: 99,
                        flexWrap: 'wrap',
                        button: {
                          display: 'block',
                          ':hover': { display: 'block', zIndex: 9000 },
                        },
                      }}
                      pr={4}
                      pb={4}>
                      <Box sx={{ position: 'relative' }}>
                        {/* \\!imageSaved && ( */}
                        {!isEdit && (
                          <>
                            <Image
                              onClick={() => toggleEdit()}
                              sx={{
                                width: '80px',
                                maxWidth: 'auto',
                                height: '80px',
                                borderRadius: 99,
                                border: 'solid 1px',
                                borderColor: 'gray.3',
                              }}
                              src={`${profile?.profile_pic}`}
                            />
                          </>
                        )}
                        {isEdit && (
                          <Box>
                            {/* onClick={() =>
                                setProfileImageModal(!profileImageModal)
                              } */}
                            <Image
                              onClick={() =>
                                setProfileImageModal(!profileImageModal)
                              }
                              sx={{
                                width: '80px',
                                maxWidth: 'auto',
                                height: '80px',
                                borderRadius: 99,
                                border: 'solid 1px',
                                borderColor: 'gray.3',
                              }}
                              src={`${profile?.profile_pic}`}
                            />
                            <Modal
                              style={defaultStyle}
                              isOpen={profileImageModal}
                              onRequestClose={closeModal}
                              ariaHideApp={false}
                              contentLabel="Profile Image">
                              {/* <Text>Editor</Text> */}
                              <ImageCropper onFileSubmit={onCroppedImage} />
                            </Modal>
                          </Box>
                        )}
                        {imagePreview && (
                          <>
                            <Image
                              src={imagePreview}
                              sx={{
                                width: '80px',
                                mr: 3,
                                mt: 2,
                                height: '80px',
                                borderRadius: 3,
                                border: 'solid 1px',
                                borderColor: 'gray.3',
                              }}
                            />
                          </>
                        )}
                      </Box>
                    </Flex>
                  )}
                </Flex>
              </Box>
              <Box>
                <Box mx={0} mb={3} as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Field
                    name="name"
                    label="Name"
                    variant="baseInput"
                    placeholder="Your Full Name"
                    register={register}
                    error={errors.name}
                  />
                  <Field
                    name="dob"
                    label="Birthday"
                    variant="baseInput"
                    type="date"
                    register={register}
                    error={errors.dob}
                  />
                  <Label>Gender</Label>
                  <Select {...register('gender', { required: true })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                  {errors.gender && <Text>This field is required</Text>}
                  <Button
                    type="submit"
                    ml={0}
                    mt={3}
                    sx={{ borderRadius: '6px' }}>
                    {saving && <Spinner width={16} height={16} color="white" />}
                    {!saving && <Text>Save</Text>}
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Form;
