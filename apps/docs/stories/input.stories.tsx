import type {Meta, StoryObj} from "@storybook/react";
import {Input} from "@athom/mui-override/components";

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    type: {
      control: {type: "radio"},
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;


export const Primary: Story = {
  render: (props) => (
    <Input
      {...props}
    />
  ),
  name: "Input",
  args: {
    name: 'email',
    placeholder: 'email'
  },
};
