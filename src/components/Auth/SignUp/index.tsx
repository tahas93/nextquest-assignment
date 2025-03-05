import {
  AccountIcon,
  CheckIcon,
  HidePasswordIcon,
  MailIcon,
  ShowPasswordIcon,
} from '@public/svg/icons';
import LeftSection from '@src/components/Auth/SignUp/LeftSection';
import InputTextField from '@src/components/common/InputTextField';
import Label from '@src/components/common/Label';
import PrimaryBtn from '@src/components/common/PrimaryBtn';
import { ErrorMessage, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
  const [isShow, setShow] = useState(false);
  const [focused, setFocused] = useState('');
  return (
    <div className="flex w-full items-stretch justify-between">
      <LeftSection />
      <div className="flex w-full">
        <div className="flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-80 pb-8 pt-14">
          <div className="w-full px-6">
            <h1 className="mb-5 text-left text-3xl font-semibold text-white">Join Now for Free</h1>
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
                      {/* start name field */}
                      <div className="flex flex-col">
                        <Label htmlFor="name" text="Name" />
                        <div className="relative mt-2 flex items-center">
                          <InputTextField
                            type="name"
                            id="name"
                            placeholder=""
                            name="name"
                            focusHandler={(e: any) => setFocused(e.target.name)}
                            blurHandler={() => setFocused('')}
                          />
                          <AccountIcon
                            className={`absolute right-4 ${
                              focused === 'name' ? 'text-nx-pink-100' : 'text-nx-gray-100'
                            }`}
                            width={22}
                            height={26}
                          />
                        </div>
                        <ErrorMessage className="mt-2 text-red-500" name="name" component="div" />
                      </div>
                      {/* end name field */}

                      {/* start email field */}
                      <div className="flex flex-col">
                        <Label htmlFor="email" text="Email address" />
                        <div className="relative mt-2 flex items-center">
                          <InputTextField
                            type="email"
                            id="email"
                            placeholder=""
                            name="email"
                            focusHandler={(e: any) => setFocused(e.target.name)}
                            blurHandler={() => setFocused('')}
                          />
                          <MailIcon
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

                      <div className="flex w-full gap-8 xs:flex-col lg:flex-row">
                        {/* start password field */}
                        <div className="flex flex-1 flex-col">
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

                        {/* start confirm password field */}
                        <div className="flex flex-1 flex-col">
                          <Label htmlFor="confirmPassword" text="Confirm Password" />
                          <div className="relative mt-2 flex items-center">
                            <InputTextField
                              type={isShow ? `text` : `password`}
                              id="confirmPassword"
                              placeholder=""
                              name="confirmPassword"
                              focusHandler={(e: any) => setFocused(e.target.name)}
                              blurHandler={() => setFocused('')}
                            />
                            <a onClick={() => setShow(!isShow)} className="absolute right-4">
                              {isShow ? (
                                <HidePasswordIcon
                                  className={
                                    focused === 'confirmPassword'
                                      ? 'text-nx-pink-100'
                                      : 'text-nx-gray-100'
                                  }
                                />
                              ) : (
                                <ShowPasswordIcon
                                  className={
                                    focused === 'confirmPassword'
                                      ? 'text-nx-pink-100'
                                      : 'text-nx-gray-100'
                                  }
                                />
                              )}
                            </a>
                          </div>
                          <ErrorMessage
                            className="mt-2 text-red-500"
                            name="confirmPassword"
                            component="div"
                          />
                        </div>
                        {/* end confirm password field */}
                      </div>

                      {/* start referral field */}
                      <div className="flex flex-col">
                        <Label
                          htmlFor="name"
                          text={
                            <>
                              <p>Referral Code</p>
                              <span className="text-xs">(Optional)</span>
                            </>
                          }
                          className="inline-flex space-x-1"
                        />
                        <div className="relative mt-2 flex items-center">
                          <InputTextField
                            type="name"
                            id="name"
                            placeholder=""
                            name="name"
                            focusHandler={(e: any) => setFocused(e.target.name)}
                            blurHandler={() => setFocused('')}
                          />
                        </div>
                        <ErrorMessage className="mt-2 text-red-500" name="name" component="div" />
                      </div>
                      {/* end referral field */}
                    </div>
                    <div className="mb-8 mt-5 flex w-full items-center justify-between">
                      {/* terms link */}
                      <div className="flex gap-2">
                        <label className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            value="terms"
                            name="terms"
                            id="terms"
                            className="peer sr-only"
                          />
                          <span className="border-nx-white h-4 w-4 cursor-pointer rounded-sm border-2 bg-transparent peer-checked:border-nx-pink-100 peer-checked:bg-nx-pink-100"></span>
                          <CheckIcon className="absolute hidden h-4 w-4 cursor-pointer peer-checked:block peer-checked:text-nx-black-300" />
                        </label>
                        <Link
                          className="font-normal text-nx-pink-100 underline"
                          href="https://flirtbate.com/terms-and-condition"
                        >
                          Terms and conditions
                        </Link>
                      </div>

                      {/* remember box */}
                      <div className="flex gap-1">
                        <label className="flex gap-1">
                          <input
                            type="checkbox"
                            value="rememberMe"
                            name="rememberMe"
                            id="rememberMe"
                            className="peer sr-only"
                          />
                          <span className="border-nx-white h-4 w-4 cursor-pointer rounded-sm border-2 bg-transparent peer-checked:border-nx-pink-100 peer-checked:bg-nx-pink-100"></span>
                          <CheckIcon className="absolute hidden h-4 w-4 cursor-pointer peer-checked:block peer-checked:text-nx-black-300" />
                        </label>
                        <Label
                          htmlFor="rememberMe"
                          text="Remember Me"
                          className="cursor-pointer font-medium text-nx-gray-100"
                        />
                      </div>
                    </div>
                    <PrimaryBtn text="Sign up" fullWidth />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="mt-8 flex flex-col gap-5 border-t border-nx-black-200 pt-8">
              <div className="flex w-full flex-nowrap items-center justify-center space-x-1.5">
                <p className="text-nx-white-100">Sign up as a Model</p>
                <Link href="" className="font-bold text-nx-pink-100 underline">
                  here
                </Link>
              </div>
              <div className="flex w-full flex-nowrap items-center justify-center space-x-2">
                <p className="text-nx-gray-100">Have an account already?</p>
                <Link href="" className="font-bold text-nx-white-100 underline">
                  Log in instead!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
