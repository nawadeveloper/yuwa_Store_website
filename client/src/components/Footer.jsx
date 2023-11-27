import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaRegCopyright,
  FaCopyright,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="bg-rambow-400 w-full">
      <div className="display_size flex flex-wrap justify-between gap-4 py-16 text-rambow-100">
        <div className="lg:flex-1 px-4 lg:px-0">
          <h5 className="text-white font-bold text-lg py-2">Hours</h5>
          <table>
            <tbody>
              <tr>
                <td>mon to fri :</td>
                <td className="pl-2">6am to 8pm</td>
              </tr>
              <tr>
                <td>sat to sun :</td>
                <td className="pl-2">6am to 6pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lg:flex-1 px-4 lg:px-0">
          <h5 className="text-white font-bold text-lg py-2">Useful Links</h5>
          <ul>
            <li>
              <a
                className="underline underline-offset-4 inline-block py-1 hover:text-white hover:no-underline"
                href="#!"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-4 inline-block py-1 hover:text-white hover:no-underline"
                href="#!"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-4 inline-block py-1 hover:text-white hover:no-underline"
                href="#!"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-4 inline-block py-1 hover:text-white hover:no-underline"
                href="#!"
              >
                Mens
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-4 inline-block py-1 hover:text-white hover:no-underline"
                href="#!"
              >
                Womens
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex-1 px-4 lg:px-0">
          <h5 className="text-white font-bold text-lg py-2">Contact Us</h5>
          <address>
            1550 Hill Road, Naperville,
            <br /> Illinois, 60561
          </address>
          <div className="flex gap-3 pt-2">
            <span className="material-symbols-rounded filled">phone</span>
            <p>800-555-2550</p>
          </div>
          <div className="flex gap-3 pt-2">
            <span className="material-symbols-rounded filled">email</span>
            <p>
              <a
                className="underline underline-offset-4"
                href="mailto:yuwacollection@gmail.com"
              >
                yuwacollection@gmail.com
              </a>
            </p>
          </div>

          <div className="flex justify-between px-2 py-10">
            <FaFacebook className="w-10 h-10" />
            <FaTwitter className="w-10 h-10" />
            <FaInstagram className="w-10 h-10" />
            <FaTiktok className="w-10 h-10" />
          </div>
        </div>
        <div className="lg:flex-1 px-4 lg:px-0">
          <h5 className="text-white font-bold text-lg py-2">Find Us</h5>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95257.95377662274!2d-88.24428400167459!3d41.746168146742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5761e216cd07%3A0x87df9c2c7f203052!2sNaperville%2C%20IL!5e0!3m2!1sen!2sus!4v1701050045283!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="display_size py-4 flex items-center gap-4 text-white border-t-2 border-rambow-300">
        <FaCopyright />
        <span>All Right Reserved | Privacy Policy</span>
      </div>
    </div>
  );
}
