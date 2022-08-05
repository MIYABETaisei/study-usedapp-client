import {
  Button,
  ColorInput,
  Group,
  Modal,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useCreateFloor } from "../../hooks/CreateFloor";
import { StrToHexColor } from "../../utils/ColorUtils";

export type FloorCreationModal = {
  opened: boolean;
  onClose: () => void;
};

export const FloorCreationModal = ({ opened, onClose }: FloorCreationModal) => {
  const form = useForm({
    initialValues: {
      ownerName: "",
      mesasge: "",
      link: "",
      color: "#b07c5d",
      windowsTint: "#b9ebeb",
    },
  });

  const { loading, success, error, send } = useCreateFloor();

  useEffect(() => {
    if (success) {
      onClose();
    }
  }, [success]);

  const handleSubmit = async (values: typeof form.values) => {
    await send(
      values.ownerName,
      values.mesasge,
      values.link,
      StrToHexColor(values.color),
      StrToHexColor(values.windowsTint)
    );
  };
  return (
    <Modal opened={opened} onClose={onClose} title="Create a new floor">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Owner name"
          placeholder="Satoshi Nakamoto"
          {...form.getInputProps("ownerName")}
        />
        <Space h="md" />
        <TextInput
          label="Message"
          placeholder="Hello world!"
          {...form.getInputProps("message")}
        />
        <Space h="md" />
        <TextInput
          label="Link"
          placeholder="https://twitter.com/otacleT"
          {...form.getInputProps("link")}
        />
        <Space h="md" />
        <ColorInput label="Color" required {...form.getInputProps("color")} />
        <Space h="md" />
        <ColorInput
          label="Windows tint"
          required
          {...form.getInputProps("windowsTint")}
        />
        {!!error && (
          <>
            <Space h="md" />
            <Text color="red">An error occured...</Text>
          </>
        )}
        <Space h="md" />
        <Group position="right">
          <Button type="submit" loading={loading}>
            Mint
          </Button>
        </Group>
      </form>
    </Modal>
  );
};
