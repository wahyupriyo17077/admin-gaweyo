import React from "react";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative flex flex-col justify-center flex-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md  lg:max-w-xl ">
        <div className=" mb-10 m-auto  w-40 h-30 ">
          <img src="https://staging.gaweyo.com/media/logos/logo_gaweyo.png" class="" alt="" />
        </div>
        <h2 className=" text-l text-center font-semibold text-gray-700 dark:text-dark-200">Masuk Ke sistem</h2>
        <h1 className="mb-8 text-s text-center text-gray-300">Masukkan detail akun anda</h1>
        <form class="bg-white     rounded px-8 pt-6 pb-8 text-center">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-3" for="username"></label>
            <input class="  bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-900 leading-tight" id="username" type="text" placeholder="Username"></input>{" "}
          </div>
          <div class="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password"></label>
            <input class=" bg-gray-100 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata Sandi"></input>{" "}
          </div>
          <div class="flex items-center justify-between">
            <label class="checkbox text-muted">
              <input type="checkbox" name="remember" />

              <span> Ingat saya</span>
            </label>
            <a href="javascript:;" id="kt_login_forgot" className="text-gray-500">
              Forgot Password ?
            </a>
          </div>
          <Link to="/app">
            <button class="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" type="button" block>
              Masuk
            </button>
          </Link>
        </form>

        <div class=""></div>
      </div>
    </div>
  );
}

export default Login;
