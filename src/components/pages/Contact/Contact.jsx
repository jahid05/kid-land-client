import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { BiCurrentLocation, BiWorld } from "react-icons/bi";

const Contact = () => {
    return (
        <div>
            <div className="container mx-auto">
      <div className="lg:w-1/2 px-4 mx-auto shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:my-40 my-20 rounded-2xl">
          <div className="card">
            <h1 className="font-bold text-center text-theme-100 py-5 md:text-4xl text-2xl">
            Send us a message
            </h1>
            <form className="card-body">
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                
                <textarea className="textarea rounded-3xl textarea-bordered" placeholder="Message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-theme-100 normal-case border-none btn-block rounded-full">
                    Send <span className="ms-3 text-2xl"><FaPaperPlane></FaPaperPlane></span>
                </button>
              </div>
            </form>
          </div>
          <div className="text-white justify-center flex flex-col md:rounded-e-2xl bg-theme-100 p-5 h-full space-y-2">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-lg">
            We are open for any suggestion or just to have a chat
            </p>
            <div className="">
                <div className="my-5 flex gap-4">
                    <span className="text-2xl"><BiCurrentLocation></BiCurrentLocation></span>
                    <p className="text-sm">Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                <div className="my-5 flex gap-4">
                    <span className="text-xl"><FaPhoneAlt></FaPhoneAlt></span>
                    <p className="text-sm">Phone: + 1235 2355 98</p>
                    </div>
                <div className="my-5 flex gap-4">
                    <span className="text-xl"><FaPaperPlane></FaPaperPlane></span>
                    <p className="text-sm">Email: info@yoursite.com</p>
                </div>
                <div className="my-5 flex gap-4">
                    <span className="text-xl"><BiWorld></BiWorld></span>
                    <p className="text-sm">Website: <span><a href="https://kidsland05.netlify.app/">kidsland05.netlify.app</a></span></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>            
        </div>
    );
};

export default Contact;