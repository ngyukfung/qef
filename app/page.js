'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaBrain } from 'react-icons/fa';



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-indigo-950 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="container mx-auto py-6 flex flex-row justify-between items-center">
        <Image src="/department.png" alt="Department of Mathematics, CUHK" width={323} height={100} className="mr-4 w-1/3 md:w-48" />
        <Image src="/projectLogo.png" alt="Lambda Math" width={596} height={133} className='w-1/3 md:w-48' />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto mt-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl"
        >
          <Image
            src="/project_feature.png"
            alt="Lambda Math Platform project feature"
            width={434}
            height={244}
            className="mx-auto rounded-xl shadow-2xl dark:shadow-blue-900/50 relative"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300"
        >
          輕鬆規劃，引領數學教學新境界
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
        >
          Lambda Math (Learning And Mastering By Dynamic Algorithms) 為您提供備課與評估所需的所有工具，包括程式生成作業、長期數據分析及一鍵生成跟進練習。結合多媒體教材，持續評估學生表現，激發自主學習。
        </motion.p>
      </section>

      {/* Features Carousel Section */}
      <section className="container mx-auto px-4 mt-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-center mb-6 text-blue-700 dark:text-blue-300"
        >
          平台特色
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-blue-900/30 h-full flex flex-col items-center text-center"
          >
            <FaRobot className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">豐富試題庫及完備教學功能</h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 text-left pl-4">
              <li>自動生成公開試題型問題，輕鬆設計功課</li>
              <li>線上計時測驗，模擬考試環境</li>
              <li>自動數據分析，掌握學生表現</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-blue-900/30 h-full flex flex-col items-center text-center"
          >
            <FaUsers className="text-6xl text-indigo-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">課堂問答系統助您了解學生需要</h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 text-left pl-4">
              <li>現場問答系統增加課堂互動</li>
              <li>運用預設隨堂測驗，輕鬆掌握學生進度</li>
              <li>統計系統助您跟進個別學生需要</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-blue-900/30 h-full flex flex-col items-center text-center"
          >
            <FaBrain className="text-6xl text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">訓練模式促進自主學習</h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 text-left pl-4">
              <li>訓練模式協助學生自主學習</li>
              <li>人工智能系統分析表現，推薦合適教材</li>
              <li>標籤個別題目，反覆練習</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto mt-8 mb-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl mb-2 font-bold text-blue-700 dark:text-blue-300"
        >
          聯絡我們
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl mb-2 text-gray-700 dark:text-gray-300"
        >
          電郵：lambdamath@cuhk.edu.hk<br />
          電話：9384 1323
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base text-gray-600 dark:text-gray-400"
        >
          由香港中文大學數學系開發，獲優質教育基金資助 (項目編號: 2021/0742)。
        </motion.p>
      </section>

    </div>
  );
}