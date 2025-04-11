import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import React from 'react';
import SparkButton from './Header/SparkButton';
export const AuthButtons = async () => {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return undefined;
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-x-12">
      <Link className='btn-spark' href="/login">
        <SparkButton/>
      </Link>
      <Link
        href="/signup">
        <button className="shiny-cta">
          <span>Signup</span>
        </button>
      </Link>
    </div>
  );
};
