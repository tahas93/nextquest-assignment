import { AccountIcon, CheckIcon, HidePasswordIcon, ShowPasswordIcon } from '@public/svg/icons';
import InputTextField from '@src/components/common/InputTextField';
import Label from '@src/components/common/Label';
import PrimaryBtn from '@src/components/common/PrimaryBtn';
import { ErrorMessage, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';

const SignIn = () => {
  const [isShow, setShow] = useState(false);
  const [focused, setFocused] = useState('');
  return (
    <div className="flex w-full items-stretch justify-between">
      <div className="auth-img block h-auto w-full max-w-[420px] rounded-xl bg-gradient-auth bg-no-repeat"></div>
      <div className="flex flex-1">
        <div className="flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-80 pb-8 pt-14">
          <div className="w-full px-6">
            <h1 className="mb-5 text-left text-3xl font-semibold text-white">
              Log in to your account
            </h1>
            <div className="mt-8 flex flex-col gap-5">
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  rememberMe: false,
                }}
                onSubmit={() => {
                  return;
                }}
              >
                {() => (
                  <Form>
                    <div className="mt-10 flex-col space-y-8">
                      {/* start email field */}
                      <div className="flex flex-col">
                        <Label htmlFor="email" text="Username / email address" />
                        <div className="relative mt-2 flex items-center">
                          <InputTextField
                            type="email"
                            id="email"
                            placeholder=""
                            name="email"
                            focusHandler={(e: any) => setFocused(e.target.name)}
                            blurHandler={() => setFocused('')}
                          />
                          <AccountIcon
                            className={`absolute right-4 ${
                              focused === 'email' ? 'text-nx-pink-100' : 'text-nx-gray-100'
                            }`}
                            width={22}
                            height={26}
                          />
                        </div>
                        <ErrorMessage className="mt-2 text-red-500" name="email" component="div" />
                      </div>
                      {/* end email field */}

                      {/* start password field */}
                      <div className="flex flex-col">
                        <Label htmlFor="password" text="Password" />
                        <div className="relative mt-2 flex items-center">
                          <InputTextField
                            type={isShow ? `text` : `password`}
                            id="password"
                            placeholder=""
                            name="password"
                            focusHandler={(e: any) => setFocused(e.target.name)}
                            blurHandler={() => setFocused('')}
                          />
                          <a onClick={() => setShow(!isShow)} className="absolute right-4">
                            {isShow ? (
                              <HidePasswordIcon
                                className={
                                  focused === 'password' ? 'text-nx-pink-100' : 'text-nx-gray-100'
                                }
                              />
                            ) : (
                              <ShowPasswordIcon
                                className={
                                  focused === 'password' ? 'text-nx-pink-100' : 'text-nx-gray-100'
                                }
                              />
                            )}
                          </a>
                        </div>
                        <ErrorMessage
                          className="mt-2 text-red-500"
                          name="password"
                          component="div"
                        />
                      </div>
                      {/* end password field */}
                    </div>
                    <div className="mb-8 mt-5 flex items-center justify-between">
                      <div className="flex gap-1">
                        <input
                          type="checkbox"
                          value="rememberMe"
                          name="rememberMe"
                          id="rememberMe"
                          className="peer sr-only"
                        />
                        <span className="border-nx-white w-4 rounded-sm border-2 bg-transparent peer-checked:border-nx-pink-100 peer-checked:bg-nx-pink-100"></span>
                        <CheckIcon className="absolute hidden h-4 w-4 peer-checked:block peer-checked:text-nx-black-300" />
                        <Label
                          htmlFor="rememberMe"
                          text="Remember Me"
                          className="cursor-pointer font-medium text-nx-gray-100"
                        />
                      </div>
                      <Link href="/forgot-password" className="ml-1 font-medium text-nx-pink-100">
                        Forgot password?
                      </Link>
                    </div>
                    <PrimaryBtn text="Login" fullWidth />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="mt-8 flex flex-col gap-5 border-t border-nx-black-200 pt-8">
              <div className="flex w-full flex-nowrap items-center justify-center space-x-1.5">
                <p className="text-nx-white-100">Login as a Model</p>
                <Link href="" className="font-bold text-nx-pink-100 underline">
                  here
                </Link>
              </div>
              <div className="flex w-full flex-nowrap items-center justify-center space-x-2">
                <p className="text-nx-gray-100">Do not have an account?</p>
                <Link href="" className="font-bold text-nx-white-100">
                  Join for free now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
