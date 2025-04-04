import { Meta, StoryObj } from '@storybook/react'
import AccountPage from './page'
import Layout from './layout'

const meta: Meta<typeof AccountPage> = {
  title: 'Page/AccountPage',
  component: AccountPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: { appDirectory: true },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-mobile">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default: StoryObj<typeof AccountPage> = {
  render: () => (
    <Layout>
      <AccountPage />
    </Layout>
  ),
}
