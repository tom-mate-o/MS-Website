import React from 'react';
import Layout from '@theme/Layout';

export default function Page2() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          Servus <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
