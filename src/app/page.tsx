'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { catInfoAtom } from '@/store/catStore';
import { Heart, Star, Camera, Coffee, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [catInfo] = useAtom(catInfoAtom);

  const features = [
    {
      icon: Heart,
      title: '사랑스러운 응꼬냄새',
      description: '코코는 공주라서 응꼬를 혼자 닦지 않아요. /n 집사가 닦아줘요.',
      color: 'from-orange-300 to-orange-400'
    },
    {
      icon: Star,
      title: '우렁찬 골골송',
      description: '손만 대면 골골거려서 아주 귀여워요. /n 머가 그리 좋을까',
      color: 'from-amber-300 to-amber-400'
    },
    {
      icon: Camera,
      title: '무릎냥이',
      description: '원피스를 입고 무릎을 치면 올라와요. /n 해먹은 사줘도 안 쓰면서 인간 해먹은 써먹어요.',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: Coffee,
      title: '아주 귀여움',
      description: '자기 이름이 귀여워인줄 알아요. /n 귀엽긴해요.',
      color: 'from-orange-300 to-yellow-400'
    }
  ];

  const specialMoments = [
    {
      title: 'DANCE DANCE DAY',
      description: '장난감을 잡을 수 있을 것인가',
      icon: '💃',
      image: '/coco_3.png'
    },
    {
      title: 'SUNSHINE TIME',
      description: '굽는 중',
      icon: '☀️',
      image: '/coco_6.png'
    },
    {
      title: 'PLAY TIME',
      description: '사냥놀이',
      icon: '🎾',
      image: '/coco_1.png'
    },
    {
      title: 'SLEEPY MOMENT',
      description: '복실해지는 중',
      icon: '😴',
      image: '/coco_2.png'
    },
    {
      title: 'TRICOLOR BEAUTY',
      description: '귀여워',
      icon: '🌈',
      image: '/coco_5.png'
    },
    {
      title: 'KOREAN CHARM',
      description: '역시 귀여워',
      icon: '🇰🇷',
      image: '/coco_4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* 배경 장식 요소들 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-amber-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 메인 말풍선 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mb-12"
            >
              <div className="bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-orange-300 relative">
                {/* 말풍선 꼬리 */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-orange-400 to-amber-500 p-2 shadow-lg">
                    <Image
                      src="/coco_5.png"
                      alt="코코"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 font-pacifico cute-text-shadow">
                  고양이 보고가세요
                </h1>
                <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-comic-neue">
                  저희집 <span className="text-orange-600 font-bold font-bubblegum-sans cute-text-glow">{catInfo.name}</span>입니다
                </p>
                <div className="text-lg text-gray-500 font-indie-flower">
                  {catInfo.breed} • {catInfo.age}살 • {catInfo.weight}kg
                </div>
              </div>
            </motion.div>
            
            {/* 성격 태그들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {catInfo.personality.map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-300 to-amber-400 text-white rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  ✨ {trait}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all border-4 border-orange-300"
                >
                  🐱 곡고 더 알아보기
                </motion.button>
              </Link>
              <Link href="/diary">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all border-4 border-amber-300"
                >
                  📖 일기장 보기
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 코코 귀여움 포인트 Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg border-4 border-orange-300">
              <Star className="w-8 h-8 text-amber-500" />
              <h2 className="text-4xl font-bold text-gray-800">
                코코 귀여움 포인트
              </h2>
              <Star className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6">
              왜 코코가 귀여울까
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group"
                >
                  {/* 말풍선 모양 카드 */}
                  <div className={`bg-gradient-to-br ${feature.color} p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all border-4 border-white relative`}>
                    {/* 말풍선 꼬리 */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Icon className="w-10 h-10 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-white text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 집사 뒤집어지는 순간들 Section */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg border-4 border-amber-300">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <h2 className="text-4xl font-bold text-gray-800 font-bubblegum-sans cute-text-shadow">
                집사 뒤집어지는 순간들
              </h2>
              <Sparkles className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6 font-comic-neue">
              매일매일 새로롭게 귀여워
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialMoments.map((moment, index) => (
              <motion.div
                key={moment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-4 border-amber-200 overflow-hidden"
              >
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-xl overflow-hidden bg-gradient-to-r from-orange-100 to-amber-100 p-1">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-4xl mb-3">{moment.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-gray-600">
                    {moment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 털뭉탱이 Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-amber-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[2rem] p-12 shadow-2xl border-4 border-orange-300">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                🎉 털뭉탱이 순간 🎉
              </h2>
              <p className="text-2xl text-gray-600 mb-8">
                매일매일 새로운 털뭉탱쓰
              </p>
              <Link href="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all border-4 border-orange-300"
                >
                  📸 사진 보기
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
