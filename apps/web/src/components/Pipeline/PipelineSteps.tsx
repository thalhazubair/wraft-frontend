import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { DeleteIcon } from '@wraft/icon';
import { Box, Flex, Text, useThemeUI } from 'theme-ui';
import { Button, Table } from '@wraft/ui';
import { Drawer } from '@wraft-ui/Drawer';
import toast from 'react-hot-toast';

import { deleteAPI, fetchAPI } from '../../utils/models';
import PipelineTypeForm from './PipelineTypeForm';
import Modal from '../Modal';
import { ConfirmDelete } from '../common';

export interface Theme {
  total_pages: number;
  total_entries: number;
  themes: ThemeElement[];
  page_number: number;
}
export interface ThemeElement {
  updated_at: string;
  typescale: any;
  name: string;
  inserted_at: string;
  id: string;
  font: string;
  file: null;
}

type Props = {
  rerender: any;
  setRerender: any;
};

const Form = ({ rerender, setRerender }: Props) => {
  const { theme } = useThemeUI();
  const [loading, setLoading] = useState<boolean>(false);
  const [pipelineData, setPipelineData] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [selectedPipelineId, setSelectedPipelineId] = useState<string>('');
  const [pipeStageName, setPipeStageName] = useState<string>('');
  const [selectedPipelineStage, setSelectedPipelineStage] =
    useState<string>('');

  const handlePipelineClick = (pipelineId: string, stagename: string) => {
    console.log(pipelineId, 'logid');

    setIsOpen(true);
    setSelectedPipelineId(pipelineId);
    setPipeStageName(stagename);
  };

  const router = useRouter();

  const cId: string = router.query.id as string;

  const loadDetails = () => {
    fetchAPI(`pipelines/${cId}`).then((data: any) => {
      setPipelineData(data);
    });
  };

  const handleAddPipelineStep = () => {
    setIsOpen(true);
    // Reset selectedPipelineId to empty string when "Add pipeline step" button is clicked
    setSelectedPipelineId('');
  };

  const onDelete = (stageId: any) => {
    deleteAPI(`stages/${stageId}`)
      .then(() => {
        setRerender && setRerender((prev: boolean) => !prev);
        toast.success('Stage Deleted Successfully', { duration: 1000 });
        Router.push(`/manage/pipelines/run/${cId}`);
      })
      .catch(() => {
        toast.error('Delete Failed', { duration: 1000 });
      });
  };

  useEffect(() => {
    loadDetails();
  }, [cId, rerender]);

  const columns = [
    {
      id: 'content.name',
      header: 'NAME',
      accessorKey: 'content.name',
      cell: ({ row }: any) => (
        <Box sx={{ display: 'flex' }} key={row.index}>
          <Text
            as="p"
            variant="pM"
            onClick={() =>
              handlePipelineClick(
                row.original.id,
                row.original.data_template.title,
              )
            }>
            {row.original.data_template.title}
          </Text>
        </Box>
      ),
      enableSorting: false,
    },
    {
      id: 'content.status',
      header: (
        <Flex sx={{ display: 'flex', justifyContent: 'center' }}>
          <Text as="p" variant="pM" sx={{ color: 'gray.300' }}>
            STATE
          </Text>
        </Flex>
      ),
      cell: ({ row }: any) => (
        <Flex
          key={row.index}
          sx={{ display: 'flex', justifyContent: 'center' }}>
          <Text as="p" variant="pM" sx={{ color: 'gray.300' }}>
            Approved
          </Text>
        </Flex>
      ),
      enableSorting: false,
    },
    {
      id: 'content.state',
      header: (
        <Flex sx={{ display: 'flex' }}>
          <Text as="p" variant="pM" sx={{ color: 'gray.300' }}>
            STATE
          </Text>
        </Flex>
      ),
      cell: ({ row }: any) => (
        <Flex key={row.index} sx={{ justifyContent: 'space-between' }}>
          <Text as="p" variant="pM" sx={{ color: 'gray.300' }}>
            Published
          </Text>
          <Box>
            <DeleteIcon
              onClick={() => {
                setIsOpenDelete(true);
                setSelectedPipelineStage(row.original.id);
              }}
            />
          </Box>
        </Flex>
      ),
      enableSorting: false,
    },
  ];

  return (
    <Box>
      {pipelineData?.stages && (
        <Table
          data={pipelineData.stages}
          columns={columns}
          isLoading={loading}
        />
      )}{' '}
      <Box mt="auto" mb="4">
        <Box className="first-step" py={4}>
          <Button variant="secondary" onClick={handleAddPipelineStep}>
            + Add pipeline step
          </Button>
        </Box>
      </Box>
      <Drawer open={isOpen} setOpen={() => setIsOpen(false)}>
        {isOpen && (
          <PipelineTypeForm
            setIsOpen={setIsOpen}
            setRerender={setRerender}
            pipelineData={pipelineData}
            id={selectedPipelineId}
            pipeStageName={pipeStageName}
          />
        )}
      </Drawer>
      <Modal isOpen={isOpenDelete}>
        {
          <ConfirmDelete
            title="Delete Stage"
            text="Are you sure you want to delete ?"
            setOpen={setIsOpenDelete}
            onConfirmDelete={() => {
              onDelete(selectedPipelineStage);
              setIsOpenDelete(false);
            }}
          />
        }
      </Modal>
    </Box>
  );
};
export default Form;