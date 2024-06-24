import React from 'react';

const TermAndPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Terms and Policy</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Welcome to our organic food store. By accessing and using our website, you agree to be bound by the terms and conditions outlined here. Please read them carefully.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Use of Website</h2>
        <p>
          You agree to use our website only for lawful purposes. You must not use our website in any way that breaches any applicable local, national, or international law or regulation.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p>
          We are committed to protecting your privacy. Our privacy policy, which sets out how we use your information, can be found on our Privacy Policy page. By using our website, you consent to the processing described therein.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p>
          We reserve the right to amend these terms from time to time. Any changes will be posted on this page, and it is your responsibility to check for any updates.
        </p>
      </section>
    </div>
  );
};

export default TermAndPolicy;
