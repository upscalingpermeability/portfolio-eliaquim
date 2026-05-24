const Contact = () => {
  const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
  const redirectPath = import.meta.env.VITE_CONTACT_REDIRECT_PATH || "/";
  const redirectUrl = `${window.location.origin}${redirectPath}`;

  return (
    <form
      action={formEndpoint}
      method="POST"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={redirectUrl} />

      <input
        name="name"
        className="w-full bg-black/50 border border-white/10 outline-none focus:border-white focus:ring-1 focus:ring-white text-white rounded-lg p-4 transition-all"
        placeholder="Your Name"
        required
      />

      <input
        name="email"
        type="email"
        className="w-full bg-black/50 border border-white/10 outline-none focus:border-white focus:ring-1 focus:ring-white text-white rounded-lg p-4 transition-all"
        placeholder="Email Address"
        required
      />

      <textarea
        name="message"
        className="w-full bg-black/50 border border-white/10 outline-none focus:border-white focus:ring-1 focus:ring-white text-white rounded-lg p-4 min-h-[150px] resize-y transition-all"
        placeholder="Your Message"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full py-4 mt-2 bg-white hover:bg-neutral-200 text-black transition-colors font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;
