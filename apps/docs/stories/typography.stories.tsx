import type {Meta, StoryObj} from "@storybook/react";
import {Typography} from "@athom/mui-override/components";
import {Abc} from "@athom/mui-override/icons";


const meta: Meta<typeof Typography> = {
  component: Typography,

};

export default meta;

type Story = StoryObj<typeof Typography>;


export const Primary: Story = {
  render: ({children, ...rest}) => (
    <Typography {...rest}>
      {children}
    </Typography>
  ),
  name: "Typography",
  args: {
    children: "Hello",
    variant: 'body1'
  },
};
