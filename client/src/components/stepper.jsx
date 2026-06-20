function Stepper() {
  const steps = [
    "Cart",
    "Address",
    "Payment",
    "Success",
  ];

  return (
    <div className="flex justify-between">

      {steps.map((step) => (
        <div key={step} className="text-center">

          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto">
            ✓
          </div>

          <p className="mt-3">
            {step}
          </p>

        </div>
      ))}

    </div>
  );
}

export default Stepper;