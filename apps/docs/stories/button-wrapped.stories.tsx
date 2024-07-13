import type {Meta, StoryObj} from "@storybook/react";
import {ButtonWrapped} from "@athom/mui-override/components";


const meta: Meta<typeof ButtonWrapped> = {
  component: ButtonWrapped,
  argTypes: {
    type: {
      control: {type: "radio"},
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonWrapped>;


export const Primary: Story = {
  render: (props) => (
    <>
      <ButtonWrapped
        {...props}
        onClick={(): void => {
          // eslint-disable-next-line no-alert -- alert for demo
          alert("Hello from Turborepo!");
        }}
      >
        Hello
      </ButtonWrapped>
    </>
  ),
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    variant: 'contained'
  },
};
