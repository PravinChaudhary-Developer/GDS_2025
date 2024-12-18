import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import PriceFormate from "../components/PriceFormate";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrement, handleIncrement, resetvalue } from "../toolkit/slice";

const Register = () => {
  const { price, qty } = useSelector((state) => state.slice);
  const dispatch = useDispatch();

  const gst = (price * qty * 18) / 100;
  const GST = Math.ceil(gst);
  const sabtotal = price * qty;

  const [inputForm, setInputForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    totalPrice: sabtotal + GST,
  });

  useEffect(() => {
    const gst = (price * qty * 18) / 100;
    const GST = Math.ceil(gst);
    const sabtotal = price * qty;
    setInputForm((prevState) => ({
      ...prevState,
      totalPrice: sabtotal + GST,
    }));
  }, [price, qty]);

  const handleSubmit = (e) => {
    e.preventDefault();

    confirm(
      `Hello Mr.${inputForm.fname} ${inputForm.lname} you are register Successfully 🎉`
    );
    setInputForm({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      company: "",
    });
    dispatch(resetvalue());
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  return (
    <>
      <main className="my-10">
        <Title
          title={"Register Now"}
          discription={
            "Secure your spot at Gujarat's biggest digital marketing event"
          }
        />

        <section className="flex my-8 justify-center items-center w-full">
          <form onSubmit={handleSubmit} className="shadow-xl p-12 rounded-lg">
            <h1 className="text-lg font-semibold py-4">Personal Information</h1>

            <div className="grid grid-cols-2 justify-between items-center w-full md:w-[720px] gap-6">
              {/* First Name */}
              <label className="text-sm grid gap-1" htmlFor="fname">
                First Name*
                <input
                  type="text"
                  title="enter your first name"
                  name="fname"
                  required
                  value={inputForm.fname}
                  onChange={handleInput}
                  className="border w-full border-gray-400 rounded-md py-2 px-3 focus:border-black
                    focus:outline-4 focus:outline-sky-600 focus:ring-1 focus:ring-black text-base"
                />
              </label>

              {/* Last Name */}
              <label className="text-sm grid gap-1" htmlFor="lname">
                Last Name*
                <input
                  type="text"
                  title="enter your last name"
                  name="lname"
                  required
                  value={inputForm.lname}
                  onChange={handleInput}
                  className="border w-full border-gray-400 rounded-md py-2 px-3 focus:border-black
                    focus:outline-4 focus:outline-sky-600 focus:ring-1 focus:ring-black text-base"
                />
              </label>

              {/* Email Address */}
              <label className="text-sm grid gap-1" htmlFor="email">
                Email Address*
                <input
                  type="email"
                  required
                  title="enter your email address"
                  name="email"
                  value={inputForm.email}
                  onChange={handleInput}
                  className="border w-full border-gray-400 rounded-md py-2 px-3 focus:border-black
                    focus:outline-4 focus:outline-sky-600 focus:ring-1 focus:ring-black text-base"
                />
              </label>

              {/* Phone Number */}
              <label className="text-sm grid gap-1" htmlFor="phone">
                Phone Number*
                <input
                  type="tel"
                  title="enter your Phone Number"
                  name="phone"
                  required
                  value={inputForm.phone}
                  onChange={handleInput}
                  className="border w-full border-gray-400 rounded-md py-2 px-3 focus:border-black
                    focus:outline-4 focus:outline-sky-600 focus:ring-1 focus:ring-black text-base"
                />
              </label>

              {/* Company/Organization */}
              <div className="col-span-2">
                <label className="text-sm grid gap-1" htmlFor="company">
                  Company/Organization
                  <input
                    type="text"
                    title="enter compnay name"
                    name="company"
                    required
                    value={inputForm.company}
                    onChange={handleInput}
                    className="border w-full border-gray-400 rounded-md py-2 px-3 focus:border-black
                      focus:outline-4 focus:outline-sky-600 focus:ring-1 focus:ring-black text-base"
                  />
                </label>
              </div>
            </div>

            <h1 className="text-lg font-semibold py-4">Ticket Information</h1>

            <section className="flex justify-between items-center gap-6">
              <div>
                <p className="font-medium">Early Bird Ticket</p>
                <p className="text-gray-600">
                  Access to all sessions and workshops
                </p>
              </div>

              <div className="grid justify-end items-end">
                <p className="text-sky-600 text-end py-2 font-bold text-lg font-mono">
                  ₹<PriceFormate price={price} />
                </p>
                <div className="flex justify-center items-center gap-4">
                  <button
                    type="button"
                    onClick={() => dispatch(handleDecrement())}
                    className="p-1 border-2 rounded-full px-3 hover:text-white hover:bg-sky-600 duration-300 ease-in-out shadow-md font-bold border-sky-600 text-sky-600"
                  >
                    -
                  </button>
                  <p className="w-8 font-semibold text-center">{qty}</p>
                  <button
                    type="button"
                    onClick={() => dispatch(handleIncrement())}
                    className="p-1 border-2 rounded-full px-3 hover:text-white hover:bg-sky-600 duration-300 ease-in-out shadow-md font-bold border-sky-600 text-sky-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </section>

            <hr className="h-[1px] bg-gray-200 my-6" />

            <div className="grid gap-4">
              <ul className="flex justify-between items-center">
                <li>Subtotal</li>
                <li className="font-mono duration-300 ease-in-out font-bold text-lg text-gray-900">
                  ₹<PriceFormate price={sabtotal} />
                </li>
              </ul>
              <ul className="flex justify-between items-center">
                <li>GST (18%)</li>
                <li className="font-mono duration-300 ease-in-out font-bold text-lg text-gray-900">
                  ₹<PriceFormate price={GST} />
                </li>
              </ul>
              <ul className="flex justify-between items-center">
                <li>Total</li>
                <li className="font-mono duration-300 ease-in-out font-bold text-lg text-sky-600">
                  ₹<PriceFormate price={sabtotal + GST} />
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full mt-6 font-semibold py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition duration-300"
            >
              Process to Payment
            </button>
            <p className="text-center pt-6 text-sm">
              By registering, you agree to our{" "}
              <span className="text-sky-600 hover:underline duration-300 ease-in-out cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </form>
        </section>
      </main>
    </>
  );
};

export default Register;
