import Button from "./button";

const TextInput = ({
  label,
  name,
  textarea,
}: {
  name: string;
  label: string;
  textarea?: boolean;
}) => {
  return (
    <div className="mb-[30px] flex flex-col">
      <label className="text-base text-white font-bold" htmlFor={name}>
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          className="border-[1px] outline-none border-gray-400 py-[10px] px-3 h-[102px]"
        />
      ) : (
        <input
          type="text"
          name={name}
          className="border-[1px] outline-none border-gray-400 py-[10px] px-3"
        />
      )}
    </div>
  );
};

export function ContactForm() {
  return (
    <form action="/send-data-here" method="post">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7">
        <TextInput name="email" label="Email" />
        <TextInput name="name" label="Name" />
      </div>
      <TextInput name="address" label="Address" />
      <TextInput textarea name="Message" label="Message" />
      <Button variant={4} className="w-full">Submit</Button>
    </form>
  );
}
