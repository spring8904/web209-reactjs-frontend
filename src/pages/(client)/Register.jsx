import { Button, Checkbox, Form, Input } from 'antd'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Register = () => {
  const [form] = Form.useForm()
  const { register, isRegisterPending } = useAuth()

  useEffect(() => {
    document.title = 'Register'
  }, [])

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 pt-8 pb-20 mx-auto">
        <Link to="/" className="flex items-center hover:text-black mb-6">
          <img className="block w-auto h-9 dark:hidden" src="/logo.png" />
          <span className="text-2xl font-medium ml-2">Spring Store</span>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your Free Account
            </h1>
            <Form
              className="space-y-4 md:space-y-6"
              name="login"
              form={form}
              onFinish={register}
              disabled={isRegisterPending}
              layout="vertical"
              requiredMark="optional"
            >
              <Form.Item
                label="Your email:"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a validate email!',
                  },
                ]}
              >
                <Input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </Form.Item>

              <Form.Item
                label="Your password:"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    min: 6,
                    message: 'Password must be at least 6 characters',
                  },
                ]}
              >
                <Input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox defaultChecked>
                  I accept the{' '}
                  <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Terms and Conditions
                  </span>
                </Checkbox>
              </Form.Item>

              <Button block type="primary" htmlType="submit">
                Create an account
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Register
