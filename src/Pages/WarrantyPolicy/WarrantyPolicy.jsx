import React from 'react';

const WarrantyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Warranty Policy</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Product Warranty</h2>
        <p>
          We stand behind the quality of our organic products. All items are warranted to be free from defects in material and workmanship for a period of 30 days from the date of purchase.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Warranty Coverage</h2>
        <p>
          This warranty covers any defects in material or workmanship under normal use during the warranty period. During the warranty period, we will replace, at no charge, products or parts of a product that proves defective.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Warranty Exclusions</h2>
        <p>
          This warranty does not cover any problem that is caused by conditions, malfunctions, or damage not resulting from defects in material or workmanship.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">How to File a Warranty Claim</h2>
        <p>
          To obtain warranty service, you must first contact us to determine the problem and the most appropriate solution for you.
        </p>
      </section>
    </div>
  );
};

export default WarrantyPolicy;
