'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { catInfoAtom } from '@/store/catStore';
import { Camera, Heart, Star, Download, X, ChevronLeft, ChevronRight, Sparkles, Gift } from 'lucide-react';

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  description: string;
  date: string;
  category: 'daily' | 'sleeping' | 'playing' | 'eating' | 'cute';
  likes: number;
}

const photoData: PhotoItem[] = [
  {
    id: '1',
    src: '/coco_1.png',
    title: '창가에서 새 구경하기',
    description: '아침에 일어나서 창가에서 새들을 구경하는 Coco의 모습이에요. 삼색 털이 햇살에 반짝이며 꼬리를 흔들고 있어요.',
    date: '2024-01-15',
    category: 'daily',
    likes: 42
  },
  {
    id: '2',
    src: '/coco_2.png',
    title: '소파에서 편안하게 낮잠',
    description: '점심 먹고 소파에서 깊이 잠들어 있는 Coco예요. 삼색 털이 부드럽게 펼쳐져서 너무 평화로워요.',
    date: '2024-01-14',
    category: 'sleeping',
    likes: 38
  },
  {
    id: '3',
    src: '/coco_3.png',
    title: '장난감 쥐와 사냥놀이',
    description: '새로 산 장난감 쥐를 가지고 하루종일 놀았어요. 삼색 털이 움직일 때마다 아름답게 반짝거려요.',
    date: '2024-01-13',
    category: 'playing',
    likes: 45
  },
  {
    id: '4',
    src: '/coco_4.png',
    title: '참치 먹기',
    description: '가장 좋아하는 참치를 먹고 있는 Coco의 모습이에요. 삼색 털이 집중해서 먹는 모습과 잘 어울려요.',
    date: '2024-01-12',
    category: 'eating',
    likes: 51
  },
  {
    id: '5',
    src: '/coco_5.png',
    title: '카메라 응시하기',
    description: '카메라를 향해 예쁘게 응시하는 Coco의 모습이에요. 삼색 털이 완벽하게 어우러진 포토제닉 고양이예요.',
    date: '2024-01-11',
    category: 'cute',
    likes: 67
  },
  {
    id: '6',
    src: '/coco_6.png',
    title: '창가에서 햇살 받기',
    description: '창가에서 따뜻한 햇살을 받으며 쉬고 있는 Coco예요. 삼색 털이 햇살에 반짝거려서 너무 예뻐요.',
    date: '2024-01-10',
    category: 'daily',
    likes: 39
  }
];

const categories = [
  { key: 'all', label: '전체', icon: Camera, color: 'from-pink-300 to-pink-400' },
  { key: 'daily', label: '일상', icon: Camera, color: 'from-blue-300 to-blue-400' },
  { key: 'sleeping', label: '잠자는 모습', icon: Star, color: 'from-purple-300 to-purple-400' },
  { key: 'playing', label: '놀이', icon: Star, color: 'from-yellow-300 to-yellow-400' },
  { key: 'eating', label: '먹는 모습', icon: Heart, color: 'from-green-300 to-green-400' },
  { key: 'cute', label: '귀여운 순간', icon: Heart, color: 'from-pink-300 to-purple-400' }
];

export default function GalleryPage() {
  const [catInfo] = useAtom(catInfoAtom);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredPhotos = selectedCategory === 'all' 
    ? photoData 
    : photoData.filter(photo => photo.category === selectedCategory);

  const openPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (currentPhotoIndex < filteredPhotos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
      setSelectedPhoto(filteredPhotos[currentPhotoIndex + 1]);
    }
  };

  const prevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
      setSelectedPhoto(filteredPhotos[currentPhotoIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Coco의 갤러리 📸
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              매일매일 새로운 모습을 보여주는 Coco의 특별한 순간들을 
              사진으로 담아서 공유해요 ✨
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.key;
              
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all border-4 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105 border-white`
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 border-orange-200 hover:scale-105'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-bold">{category.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
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
              <h2 className="text-4xl font-bold text-gray-800">
                {selectedCategory === 'all' ? '모든 사진' : categories.find(c => c.key === selectedCategory)?.label}
              </h2>
              <Sparkles className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6">
              총 {filteredPhotos.length}장의 사진을 확인할 수 있어요 📷
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => openPhoto(photo)}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border-4 border-orange-200">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center p-2">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-lg">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-gray-500 font-medium">{photo.date}</span>
                      <div className="flex items-center space-x-2 text-orange-500">
                        <Heart size={20} />
                        <span className="text-lg font-bold">{photo.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-3xl border-4 border-orange-200 shadow-xl"
            >
              <Camera size={80} className="text-orange-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-500 mb-3">
                이 카테고리에 사진이 없어요
              </h3>
              <p className="text-gray-400 text-lg">
                다른 카테고리를 선택해보세요! ✨
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closePhoto}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-4 border-orange-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Navigation Arrows */}
                {filteredPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      disabled={currentPhotoIndex === 0}
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border-2 ${
                        currentPhotoIndex === 0 ? 'text-gray-300 border-gray-200' : 'text-gray-700 border-orange-200 hover:text-orange-500 hover:border-orange-300'
                      }`}
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextPhoto}
                      disabled={currentPhotoIndex === filteredPhotos.length - 1}
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border-2 ${
                        currentPhotoIndex === filteredPhotos.length - 1 ? 'text-gray-300 border-gray-200' : 'text-gray-700 border-orange-200 hover:text-orange-500 hover:border-orange-300'
                      }`}
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={closePhoto}
                  className="absolute top-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-orange-100 transition-colors border-2 border-orange-200"
                >
                  <X size={24} className="text-orange-500" />
                </button>

                {/* Photo Display */}
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center p-8">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-contain rounded-2xl shadow-lg"
                  />
                </div>

                {/* Photo Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-800 mb-3">
                        {selectedPhoto.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-gray-600 text-lg">
                        <span>📅 {selectedPhoto.date}</span>
                        <span>•</span>
                        <span className="capitalize">🏷️ {selectedPhoto.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-500">
                      <Heart size={24} />
                      <span className="text-2xl font-bold">{selectedPhoto.likes}</span>
                    </div>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {selectedPhoto.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t-2 border-orange-200">
                    <div className="text-lg text-gray-500 font-medium">
                      📸 {currentPhotoIndex + 1} / {filteredPhotos.length}
                    </div>
                    <button className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold text-lg hover:shadow-xl transition-all border-4 border-orange-300">
                      <Download size={20} />
                      <span>다운로드 ✨</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
