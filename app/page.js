import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 ">
      {/* Header */}
      <header className="md:w-[48rem] lg:w-[64rem] w-full mx-auto py-6 px-4 flex flex-row justify-between items-center">
        <Image src="/department.png" alt="Department of Mathematics, CUHK" width={323} height={100} className="mr-4 w-1/3 md:w-48" />
        <Image src="/projectLogo.png" alt="Lambda Math" width={596} height={133} className='w-1/3 md:w-48 ' />
      </header>
      <main className="md:w-[48rem] lg:w-[64rem] w-full mx-auto px-4 py-12 space-y-6">
        <section className="bg-white dark:bg-blue-950 p-8 rounded-xl shadow-md">
          <Image src="/QEF_logo.png" alt="Quality Education Fund Logo" width={350} height={100} className="mb-4 mx-auto" />
          <h2 className="text-2xl/8 md:text-3xl/8 font-semibold mb-4 text-indigo-700 dark:text-indigo-500">About the Quality Education Fund (QEF)</h2>
          <p>
            The Quality Education Fund (QEF) has dedicated $500 million to launch the <a href="https://elafp.edb.edcity.hk/projects.php?lang=en" className="text-blue-500 hover:underline">e-Learning Ancillary Facilities Programme (eLAFP)</a>. This initiative aims to enhance e-learning by providing schools with quality ancillary facilities. It focuses on fostering collaboration among key stakeholders, including the school sector, tertiary institutions, educational and professional organizations, and the business community.
          </p>
        </section>

        {/* Section 2: Funded Project */}
        <section className="bg-white dark:bg-blue-950 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl/8 md:text-3xl/8 font-semibold mb-4 text-indigo-700 dark:text-indigo-500">Funded Project</h2>
          <p>
            “The Use of Algorithms and AI Technologies to Enable Adaptive Learning in Mathematical Education” (project no. 2021/0742) is one of the funded projects granted to the Department of Mathematics at The Chinese University of Hong Kong.
          </p>
        </section>

        {/* Section 3: Lambda Math Platform */}
        <section className="bg-white dark:bg-blue-950 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl/8 md:text-3xl/8 font-semibold mb-4 text-indigo-700 dark:text-indigo-500">Lambda Math Platform</h2>
          <p>
            <b>Lambda Math (abbreviation of Learning And Mastering By Dynamic Algorithms)</b> is a secondary school mathematics learning platform developed by the project team of the Department, which utilizes artificial intelligence to assist in teaching and learning processes. It supports teachers to arrange individual follow-up assessments or activities catering to learning diversity, and facilitates self-directed learning among students.
          </p>
          Click <a href="https://web.edcity.hk/zh-hant/elafp/project/20210742/" className="text-blue-500 hover:underline mt-4 inline-block">here</a> for more information about the platform and the subscription process.
        </section>
      </main>
    </div>
  );
}