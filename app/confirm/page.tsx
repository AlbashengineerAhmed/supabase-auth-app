import Header from '@/components/Header/Header';

export default function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div>
      <Header />

      <div className="w-full px-8 sm:max-w-lg mx-auto mt-32">
        <p className="text-white">{searchParams.message}</p>
      </div>
    </div>
  );
}
