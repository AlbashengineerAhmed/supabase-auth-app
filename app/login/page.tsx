import Header from '@/components/Header/Header';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import './login.css'
export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/');
  }

  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect('/login?message=Could not authenticate user');
    }

    return redirect('/');
  };

  return (
    <div>
      <Header />

      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
      >
        Home
      </Link>

      <div className="w-full px-8 sm:max-w-md mx-auto mt-32">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          action={signIn}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border border-white text-white mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border border-white text-white mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="btn-signin-page">
            <span>Sign In</span>
            <i></i>
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-white text-center">
              {searchParams.message}
            </p>
          )}
        </form>

        <Link
          href="/forgot-password"
          className="rounded-md no-underline text-indigo-400 text-sm "
        >
          Forgotten Password.
        </Link>

        <br />
        <br />

        <Link
          href="/signup"
          className="rounded-md no-underline text-white text-sm"
        >
          Don't have an Account? Sign Up
        </Link>
      </div>
    </div>
  );
}
