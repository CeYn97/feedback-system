import { useShow } from "@refinedev/core";
import {
  TextField,
  NumberField,
  Show,
  ListButton,
  EditButton,
} from "@refinedev/antd";

import { Typography, Button } from "antd";

export const ShowProject = () => {
  const {
    result: project,
    query: { isLoading },
  } = useShow();

  return (
    <Show
      isLoading={isLoading}
      headerButtons={() => (
        <>
          <ListButton />
          <EditButton />
          <Button
            onClick={() => {
              console.log("Переход к обращениям");
            }}
            type="default"
          >
            К обращениям
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
