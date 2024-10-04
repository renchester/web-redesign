import { useState } from 'react';

function ContactForm() {
  const initialData = {
    email: '',
    name: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialData);
  };

  return (
    <section
      id="contact-us"
      aria-labelledby="contact-label"
      className="mx-auto w-full pt-[120px] text-white md:flex md:max-w-[1200px]"
    >
      <div className="md:w-1/2">
        <h2 id="contact-label" className="font-onest mx-auto mb-8 w-4/5 text-5xl md:text-6xl">
          <span className="font-light">Let&apos;s</span>{' '}
          <span className="font-semibold">
            Work
            <br />
            <span className="text-orange-500">T</span>ogether
          </span>
        </h2>
        <p className="text-sm font-light">Get in touch and we&apos;ll help you write your story</p>
        <address className="mb-10 mt-5">
          <ul className="mx-auto flex w-96 flex-col pl-5">
            <li className="flex items-center justify-start gap-6 px-8 py-6 md:px-4">
              <svg className="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.87 258.79">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M362.79,.03c-1.12-.04-2.25-.02-3.37-.02-111.67,0-223.34,0-335.01,0-1.12,0-2.25-.01-3.37,.02C9.62,.39,0,5.74,0,16.94V241.86c0,10.47,9.62,16.55,21.08,16.91,1.25,.04,2.5,.02,3.75,.02,111.41,0,222.82,0,334.23,0,1.25,0,2.5,.02,3.75-.02,11.45-.36,21.08-6.2,21.08-16.91V17.68c0-11.47-9.26-17.29-21.08-17.66Zm-6.23,16.36c-14.02,10.52-27.45,20.61-40.9,30.69-36.73,27.55-73.47,55.1-110.21,82.64-9.15,6.86-17.96,6.82-27.08-.02C129.17,92.77,79.95,55.86,30.73,18.94c-.95-.71-1.88-1.45-3.32-2.56H356.56Zm12.38,214.49c-1.35,.15-1.58-1.07-2.12-1.74-26.51-32.68-53-65.37-79.43-98.11-2.31-2.86-4.9-4.7-8.66-3.8-3.08,.74-4.89,2.88-5.47,5.99-.53,2.85,.91,5,2.61,7.1,23.27,28.71,46.52,57.45,69.76,86.18,4.21,5.2,8.4,10.4,12.89,15.96H25.34c7.62-9.42,14.96-18.49,22.31-27.57,20.11-24.85,40.21-49.7,60.34-74.53,1.62-2,3.01-4.06,2.68-6.74-.38-3.12-2.12-5.41-5.13-6.3-3.13-.91-5.95-.06-8.06,2.54-5.75,7.07-11.47,14.17-17.21,21.25-21.36,26.4-42.73,52.8-64.08,79.21-.22,.28-.35,.63-1.08,.67V26.2c1.17-.24,1.83,.86,2.65,1.47,50.84,38.09,101.65,76.21,152.47,114.33,13.52,10.14,29.93,10.15,43.65-.13,50.44-37.8,100.85-75.64,151.28-113.46,1.08-.81,2.17-1.59,3.8-2.78V230.87Z"></path>{' '}
                </g>
              </svg>

              <strong className="hidden">Email:</strong>
              <a
                href="mailto:inquiry@raksoct.com"
                className="font-inter text-sm font-light text-white visited:text-white hover:underline"
              >
                inquiry@raksoct.com
              </a>
            </li>
            <li className="flex items-center justify-start gap-6 px-8 py-6 md:px-4">
              <svg viewBox="0 0 60 60" className="h-8 w-8 fill-white">
                <g>
                  <path d="M30,26c3.86,0,7-3.141,7-7s-3.14-7-7-7s-7,3.141-7,7S26.14,26,30,26z M30,14c2.757,0,5,2.243,5,5s-2.243,5-5,5 s-5-2.243-5-5S27.243,14,30,14z"></path>
                  <path d="M29.823,54.757L45.164,32.6c5.754-7.671,4.922-20.28-1.781-26.982C39.761,1.995,34.945,0,29.823,0 s-9.938,1.995-13.56,5.617c-6.703,6.702-7.535,19.311-1.804,26.952L29.823,54.757z M17.677,7.031C20.922,3.787,25.235,2,29.823,2 s8.901,1.787,12.146,5.031c6.05,6.049,6.795,17.437,1.573,24.399L29.823,51.243L16.082,31.4 C10.882,24.468,11.628,13.08,17.677,7.031z"></path>
                  <path d="M42.117,43.007c-0.55-0.067-1.046,0.327-1.11,0.876s0.328,1.046,0.876,1.11C52.399,46.231,58,49.567,58,51.5 c0,2.714-10.652,6.5-28,6.5S2,54.214,2,51.5c0-1.933,5.601-5.269,16.117-6.507c0.548-0.064,0.94-0.562,0.876-1.11 c-0.065-0.549-0.561-0.945-1.11-0.876C7.354,44.247,0,47.739,0,51.5C0,55.724,10.305,60,30,60s30-4.276,30-8.5 C60,47.739,52.646,44.247,42.117,43.007z"></path>
                </g>
              </svg>
              <strong className="hidden">Location:</strong>
              <a
                href="https://www.google.com/maps/place/Rakso+CT/@14.552826,121.0170055,15z/data=!4m5!3m4!1s0x0:0xbc5dd2d7377bb86!8m2!3d14.552826!4d121.0170055"
                target="_blank"
                className="font-inter flex flex-col items-start text-sm font-light text-white visited:text-white hover:underline"
              >
                <span className="font-inter text-sm font-light">5F Ricogen Building</span>
                <span className="font-inter text-sm font-light">112 Aguirre Street, Legaspi Village</span>
                <span className="font-inter text-sm font-light">Makati City, Philippines, 1229</span>
              </a>
            </li>
            <li className="flex items-center justify-start gap-6 px-8 py-6 md:px-4">
              <svg className="h-8 w-8 fill-white" viewBox="0 0 408.72 443.75">
                <g id="Layer_1-2" data-name="Layer 1">
                  <g>
                    <path
                      className="fill-white"
                      d="M127.61,.69c-.9,.1-1.86,.4-2.43-.69h2.39c.25,.14,.34,.29,.27,.45-.08,.16-.15,.24-.23,.24Z"
                    ></path>
                    <path
                      className="fill-white"
                      d="M127.61,.69c-.03-.23-.04-.46-.03-.69h1.6c-.18,1.01-.9,.77-1.56,.69Z"
                    ></path>
                    <path className="fill-white" d="M315.94,190.76c-.94-.53-1.09-1.06,0-1.6v1.6Z"></path>
                    <path className="cls-4" d="M315.94,203.53c-1.09-.53-.94-1.06,0-1.6v1.6Z"></path>
                    <path d="M83.68,438.75c-7.54,0-13.21-5.26-14.46-13.39-.14-.94-.21-2.03-.21-3.42,0-4.71,0-9.42,0-14.12-.02-9.41-.03-19.15,.09-28.7,.06-4.88-1.5-8.56-5.07-11.92-27.58-26.03-45.88-58.06-54.37-95.21C-.02,229.65,5.49,187.86,26.05,147.76c26.82-52.32,67.23-85.89,120.12-99.78,20.04-5.26,40.05-7.93,59.47-7.93,68.28,0,113.67,32.42,130.01,46.36,21.12,18.01,38.49,40.67,50.25,65.52,8.76,18.52,14.43,37.68,16.86,56.95,.2,1.58,.26,3.23,.32,4.98,.08,2.29,.17,4.65,.57,7.09l-.31,3.36c-.16,.99-.07,1.99,.27,2.92l.05,8.66c-.44,1.15-.52,2.39-.21,3.59l.2,3.11c-1.24,3.29-1.5,6.58-1.74,9.51-.12,1.45-.23,2.83-.44,4.12-5.5,32.84-17.18,61.76-34.71,85.95-17.48,24.11-41.27,44.21-70.72,59.74-26.42,13.93-56.08,21-88.16,21h0c-4.35,0-8.82-.13-13.28-.38-19.98-1.14-38.06-4.49-55.27-10.25-1.4-.47-2.72-.7-4.03-.7-2.21,0-4.33,.66-6.48,2.03-12.06,7.66-23.86,15.13-35.7,22.32-3.03,1.84-6.29,2.81-9.44,2.81ZM207.26,53.91c-15.09,0-30.95,1.71-47.15,5.09-40.71,8.48-74.92,30.02-101.68,64.01C27.47,162.33,14.75,206.15,20.62,253.22c5.11,40.98,23.25,76.17,53.93,104.58,6.48,6,8.97,11.61,8.61,19.38-.42,9.06-.33,17.96-.24,27.38,.04,4.03,.08,8.11,.08,12.26v9.02l7.65-4.78c3.48-2.18,6.91-4.3,10.28-6.38,7.94-4.91,15.44-9.55,22.92-14.47,3.5-2.3,6.73-3.37,10.17-3.37,2.16,0,4.42,.42,6.89,1.29,20.97,7.35,42.6,11.08,64.3,11.08,9.41,0,18.98-.71,28.44-2.09,51.51-7.56,93.08-33.21,123.55-76.24,22-31.07,32.81-64.71,32.11-99.99-1.05-53.67-22.73-98.7-64.43-133.82-33.99-28.63-73.57-43.15-117.63-43.15Z"></path>{' '}
                    <path d="M228.53,294.73c-3.77,0-7.76-1.85-12.21-5.65l-7.2-6.15c-10.95-9.35-22.27-19.01-33.29-28.63-2.11-1.84-4.23-2.73-6.49-2.73s-4.01,.84-5.34,1.58c-22.63,12.45-46.58,25.52-71.2,38.85-3.18,1.72-6.29,2.6-9.23,2.6-4.38,0-8.27-2.01-11.25-5.81-4.14-5.29-4.15-12.93-.01-18.17,.72-.92,1.55-1.84,2.54-2.82,13.07-13.08,26.14-26.15,39.22-39.23,18.14-18.14,36.28-36.28,54.41-54.43,3.75-3.75,7.36-5.43,11.7-5.43,.15,0,.83,0,.83,0,3.37,0,6.71,1.47,10.23,4.49,4.76,4.1,9.53,8.18,14.3,12.27,8.85,7.58,18,15.42,26.93,23.19,1.97,1.72,4.5,2.66,7.11,2.66,1.82,0,3.63-.47,5.23-1.35,25.16-13.89,50.1-27.44,71.19-38.86,2.86-1.55,5.93-2.37,8.86-2.37,6.26,0,11.32,3.51,13.53,9.4,2,5.33,1.27,10.15-2.25,14.73-.78,1.02-1.79,2.03-2.86,3.1l-.22,.22c-30.64,30.66-61.29,61.31-91.94,91.95-4.43,4.43-8.55,6.59-12.58,6.59h0Zm-47.98-109.83c-2.94,0-5.02,1.76-6.33,3.08-10.94,11.05-28.97,27.32-46.41,43.04-16.83,15.18-34.22,30.87-45.01,41.69-2.04,1.7-2.77,4.36-1.89,6.81,.88,2.44,3.2,4.08,5.77,4.08,1.21,0,2.4-.37,3.44-1.05,7.89-4.27,22.5-13.51,36.63-22.45,13.82-8.74,28.11-17.77,35.62-21.85,3.35-1.82,6.14-2.7,8.53-2.7,3.05,0,6.09,1.44,9.85,4.67,4.32,3.71,8.65,7.42,12.98,11.12,9.34,7.99,18.99,16.26,28.4,24.46,1.41,1.22,3.35,2.63,5.94,2.63,2.83,0,4.83-1.65,6.25-3.08,11.13-11.22,27.76-26.38,43.84-41.04,15.59-14.22,31.72-28.92,42.71-39.93l.25-.25c1.91-1.86,4.79-4.67,3.31-8.33-.83-2.05-2.79-3.32-5.11-3.32-.03,0-.09,0-.12,0-.8,.01-1.59,.22-2.3,.61-8.73,4.76-22.54,13.16-35.9,21.29-13.18,8.02-26.81,16.31-35.13,20.84-2.97,1.61-5.58,2.4-7.98,2.4h0c-3.19,0-6.29-1.39-9.76-4.37-4.4-3.78-8.81-7.55-13.21-11.33-9.26-7.93-18.83-16.13-28.2-24.25-1.03-.9-3.19-2.77-6.15-2.77Z"></path>{' '}
                  </g>{' '}
                </g>
              </svg>
              <strong className="hidden">Contact Number:</strong>
              <a
                href="https://m.me/RaksoComputerTechnology/"
                target="_blank"
                className="font-inter text-sm font-light text-white visited:text-white hover:underline"
              >
                m.me/RaksoComputerTechnology
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="mx-auto md:w-1/2">
        <form action="" onSubmit={handleSubmit}>
          <h2 className="font-onest mx-auto mb-8 w-4/5 text-5xl md:text-6xl">
            <span className="fontlight">Drop Us</span>
            <br />
            <span className="border-b-4 border-solid border-orange-500 font-semibold">A Line</span>
          </h2>
          <div className="flex flex-col px-10 lg:px-24">
            <label htmlFor="contact-name" className="mb-2 mt-4 text-left">
              Your name <abbr title="required">*</abbr>:
            </label>
            <input
              className="bg-blue-100 px-2 py-2 text-sky-900 shadow-md outline-none focus:bg-white focus:outline-none"
              type="text"
              name="name"
              id="contact-name"
              onChange={handleChange}
              value={formData.name}
            />
            <label htmlFor="contact-email" className="mb-2 mt-4 text-left">
              Your email <abbr title="required">*</abbr>:
            </label>
            <input
              className="bg-blue-100 px-2 py-2 text-sky-900 shadow-md outline-none focus:bg-white focus:outline-none"
              type="email"
              name="email"
              id="contact-email"
              onChange={handleChange}
              value={formData.email}
            />
            <label htmlFor="contact-message" className="mb-2 mt-4 text-left">
              Your message <abbr title="required">*</abbr>:
            </label>
            <textarea
              name="message"
              id="contact-message"
              className="max-h-10 min-h-40 resize-y bg-blue-100 px-2 py-2 text-sky-900 shadow-md outline-none focus:bg-white focus:outline-none"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <button
              type="submit"
              className="ml-auto mt-8 flex w-fit origin-bottom-right items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-2 ring-white transition-transform duration-200 visited:text-white hover:bg-sky-700 active:scale-95"
            >
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default ContactForm;
