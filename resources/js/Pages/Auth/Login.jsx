import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (

    <form onSubmit={submit} className="space-y-6">
    <section className="flex flex-col items-center justify-center h-screen mx-5 my-2 space-y-10 md:flex-row md:space-y-0 md:space-x-16 md:mx-0 md:my-0">
      <div className="max-w-sm md:w-1/3">
      <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sample image" />
      </div>
      <div className="max-w-sm md:w-1/3">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in here</label>
        </div>

          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            autoComplete="email"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
            className="w-full px-4 py-2 text-sm border border-gray-300 border-solid rounded" placeholder="Email Address" />
            <InputError message={errors.email} className="mt-2" />

        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          autoComplete="current-password"
          onChange={(e) => setData('password', e.target.value)}
        className="w-full px-4 py-2 mt-4 text-sm border border-gray-300 border-solid rounded" placeholder="Password" />
         <InputError message={errors.password} className="mt-2" />

        <div className="flex justify-between mt-4 text-sm font-semibold">
          <label className="flex cursor-pointer text-slate-500 hover:text-slate-600">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="px-4 py-2 mt-4 w-100 mb-4 text-xs tracking-wider text-white uppercase bg-blue-600 rounded w-100 hover:bg-blue-700" type="submit">Login</button>
        </div>

      </div>
    </section>
    </form>
  );
}
