import { useShow, useList } from "@refinedev/core";
import {
  TextField,
  NumberField,
  Show,
  ListButton,
  EditButton,
} from "@refinedev/antd";

import { Typography, Button } from "antd";
import { useNavigate } from "react-router";

export const ShowProject = () => {
  const {
    result: project,
    query: { isLoading },
  } = useShow();

  const navigate = useNavigate();

  const {
    result: feedbackData,
    query: { isLoading: feedbackLoading },
  } = useList({
    resource: "feedback",
    filters: project?.id
      ? [
          {
            field: "project_id",
            operator: "eq",
            value: project.id,
          },
        ]
      : [],
    pagination: {
      current: 1,
      pageSize: 12,
    },
    queryOptions: {
      enabled: !!project?.id,
    },
  });

  const feedbackCount = feedbackData?.data?.length || 0;

  return (
    <Show
      isLoading={isLoading}
      headerButtons={() => (
        <>
          <ListButton />
          <EditButton />
          <Button
            onClick={() => {
              navigate(`/feedback?project_id=${project?.id}`);
            }}
            type="default"
            loading={feedbackLoading}
          >
            К обращениям ({feedbackLoading ? "..." : feedbackCount})
          </Button>
        </>
      )}
    >
      <Typography.Title level={5}>Название</Typography.Title>
      <TextField value={project?.title} />

      <Typography.Title level={5}>Территория</Typography.Title>
      <TextField value={project?.administrative_unit} />

      <Typography.Title level={5}>Год реализации</Typography.Title>
      <TextField value={project?.year_of_completion} />

      <Typography.Title level={5}>Широта</Typography.Title>
      <NumberField value={project?.latitude} />

      <Typography.Title level={5}>Долгота</Typography.Title>
      <NumberField value={project?.longitude} />
    </Show>
  );
};
