const title = 'Signup';

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
