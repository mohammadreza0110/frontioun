import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import { FaGithub, FaLinkedin, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <div className="flex w-2/3 max-w-4xl shadow-2xl rounded-2xl">
        <div className="w-2/5 p-5 px-12 text-white bg-sky-500 rounded-r-2xl py-36">
          <h2 className="mb-2 text-3xl font-bold">سلام دوست من</h2>
          <div className="inline-block w-10 mb-2 border-2 border-white rounded-full"></div>
          <p className="mb-10">
            اطلاعاتتو وارد کن و وارد دنیای برنامه‌نویسی شو :)
          </p>
          <div className="w-full center">
            <BaseButton
              name="ثبت نام"
              classes="hover:ring-0 hover:bg-white hover:text-sky-500 font-semibold rounded-full ring-2 ring-white py-2 !px-12 text-[13px] font-bold"
            />
          </div>
        </div>
        <div className="w-3/5 p-5 bg-white rounded-l-2xl">
          <div className="font-bold text-right">
            {/* <span className="text-sky-500">فرانتیون</span> */}
          </div>
          <div className="py-10">
            <h2 className="mb-2 text-3xl font-bold text-sky-500">
              ورود به حساب کاربری
            </h2>
            <div className="inline-block w-10 mb-2 border-2 rounded-full border-sky-500"></div>
            <div className="flex justify-center my-2">
              <div className="p-3 mx-1 border-2 border-gray-200 rounded-full cursor-pointer">
                <FaGithub className="text-sm" />
              </div>
              <div className="p-3 mx-1 border-2 border-gray-200 rounded-full cursor-pointer">
                <FaGoogle className="text-sm" />
              </div>
              <div className="p-3 mx-1 border-2 border-gray-200 rounded-full cursor-pointer">
                <FaLinkedin className="text-sm" />
              </div>
            </div>
            <p className="my-3 text-sm text-gray-400">
              یا از ایمیلت استفاده کن
            </p>
            <div className="flex flex-col items-center gap-y-2">
              <BaseInput placeholder="ایمیلتو اینجا وارد کن" type="email">
                <FaRegEnvelope className="m-2 text-gray-400" />
              </BaseInput>

              <BaseInput placeholder="رمزتو اینجا وارد کن" type="password">
                <MdLockOutline className="m-2 text-gray-400" />
              </BaseInput>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs cursor-pointer">
                  <input type="checkbox" className="ml-1" />
                  منو یادت باشه
                </label>
                <div className="text-xs cursor-pointer">رمزم یادم رفته</div>
              </div>
              <div className="w-full center">
                <BaseButton
                  name="ورود"
                  classes="hover:ring-0 hover:bg-sky-500 !text-sky-500 hover:!text-white font-semibold rounded-full ring-2 ring-sky-500 py-2 !px-12 text-[13px] font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
