'use client';
import { useJobs } from '../../context/JobContext';
import { Input } from '../Input';
import { ToastContainer, toast } from 'react-toastify';

export function Modal() {
  const {
    showModal,
    setShowModal,
    setErrorMessage,
    errorMessage,
    dataInput,
    setDataInput,
    messageSuccess,
    setMessageSuccess,
  } = useJobs();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await fetch('http://localhost:3000/api/jobs/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer naranja-labs`,
      },
      body: JSON.stringify({
        ...dataInput,
      }),
    });
    const data = await result.json();
    console.log(data);
    if (data.status === 201) {
      toast.success(data.message);
      setTimeout(() => {
        setShowModal(false);
      }, 6000);
    } else if (data.status === 400) {
      toast.warning(data.message);
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            className="flex justify-center bg-[#9ca3afa2] items-center overflow-x-hidden 
              overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <ToastContainer />
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white 
                outline-none focus:outline-none"
              >
                <div
                  className="flex items-start justify-between p-5 border-b border-solid 
                  border-gray-300 rounded-t "
                >
                  <h3 className="text-3xl font=semibold">Application</h3>
                  <button
                    className="bg-gray-700 border-0 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      className="opacity-7 h-6 w-6 text-xl flex items-center justify-center 
                      py-0 text-white rounded-full"
                    >
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {errorMessage ? (
                    <div className="bg-red-500 p-3 text-white text-center">
                      <p>{errorMessage}</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="bg-[#515eefe9] shadow-md rounded px-8 pt-6 pb-8 w-full"
                    >
                      <Input.Root>
                        <Input.Label
                          className="text-white"
                          htmlFor="name"
                          text="Full Name"
                        />
                        <Input.InputCustom
                          id="name"
                          type="text"
                          name="name"
                          value={dataInput.name}
                          onChange={(e) =>
                            setDataInput({ ...dataInput, name: e.target.value })
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        />
                      </Input.Root>
                      <Input.Root>
                        <Input.Label className="text-white" htmlFor="age" text="Age" />
                        <Input.InputCustom
                          id="age"
                          type="number"
                          name="age"
                          value={dataInput.age}
                          onChange={(e) =>
                            setDataInput({ ...dataInput, age: e.target.value })
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        />
                      </Input.Root>
                      <Input.Root>
                        <Input.Label
                          className="text-white"
                          htmlFor="phone"
                          text="Phone"
                        />
                        <Input.InputCustom
                          id="phone"
                          type="tel"
                          name="phone"
                          value={dataInput.phone}
                          onChange={(e) =>
                            setDataInput({ ...dataInput, phone: e.target.value })
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        />
                      </Input.Root>
                      <Input.Root>
                        <Input.Label className="text-white" htmlFor="city" text="City" />
                        <Input.InputCustom
                          id="city"
                          type="text"
                          name="city"
                          value={dataInput.city}
                          onChange={(e) =>
                            setDataInput({ ...dataInput, city: e.target.value })
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        />
                      </Input.Root>
                      <Input.Root>
                        <Input.Label
                          className="text-white"
                          htmlFor="state"
                          text="State"
                        />
                        <Input.InputCustom
                          id="state"
                          type="text"
                          name="state"
                          value={dataInput.state}
                          onChange={(e) =>
                            setDataInput({ ...dataInput, state: e.target.value })
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        />
                      </Input.Root>
                      <div className="flex items-center justify-end p-6">
                        {messageSuccess ? (
                          <p className="text-white  w-[200px]">{messageSuccess}</p>
                        ) : (
                          <button
                            className="text-white bg-transparent border 
                          uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                          focus:outline-none mr-1 mb-1"
                            type="submit"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
