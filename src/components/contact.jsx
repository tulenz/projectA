function Contact() {
  return (
    <section className="min-h-[400px] p-10 flex flex-col bg-gray-200">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-[30px] md:text-[40px] lg:text-[50px]">
          Contact Us
        </div>
        <div className="text-[15px] md:text-[20px] lg:text-[25px]">
          Location : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consectetur eum mollitia illum rem aliquid quasi dolorum corrupti
          autem incidunt omnis quo voluptate possimus minus, excepturi iure?
          Recusandae consequatur sequi libero!
        </div>
        <div className="text-[15px] md:text-[20px] lg:text-[25px]">
          tel : xxx-xxx-xxxx
        </div>
        <div className="text-[15px] md:text-[20px] lg:text-[25px]">
          Gmail : AAAAA@gmail.com
        </div>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090194!2d144.953736315316!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2b1f3b3%3A0xf4c0c0a5a0df4cb5!2sFederation%20Square!5e0!3m2!1sen!2sth!4v1618270194691!5m2!1sen!2sth"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
