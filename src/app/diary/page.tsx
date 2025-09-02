'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import { catDiariesAtom, addDiaryAtom } from '@/store/catStore';
import { Plus, Calendar, Heart, BookOpen, X, Sparkles, Star } from 'lucide-react';

const moodEmojis = {
  happy: '😊',
  sleepy: '😴',
  playful: '🎾',
  hungry: '🍽️',
  grumpy: '😾'
};

const moodLabels = {
  happy: '행복해요',
  sleepy: '졸려요',
  playful: '장난치고 싶어요',
  hungry: '배고파요',
  grumpy: '까칠해요'
};

const availablePhotos = [
  { src: '/coco_1.png', label: '창가에서 새 구경' },
  { src: '/coco_2.png', label: '소파에서 꿀잠' },
  { src: '/coco_3.png', label: '장난감 놀이' },
  { src: '/coco_4.png', label: '참치 먹기' },
  { src: '/coco_5.png', label: '카메라 응시' },
  { src: '/coco_6.png', label: '햇살 받기' }
];

export default function DiaryPage() {
  const [diaries] = useAtom(catDiariesAtom);
  const [, addDiary] = useAtom(addDiaryAtom);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<{
    title: string;
    content: string;
    mood: 'happy' | 'sleepy' | 'playful' | 'hungry' | 'grumpy';
    activities: string[];
    photo: string;
  }>({
    title: '',
    content: '',
    mood: 'happy',
    activities: [''],
    photo: '/coco_5.png'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) return;

    const newDiary = {
      date: new Date().toISOString().split('T')[0],
      title: formData.title.trim(),
      content: formData.content.trim(),
      mood: formData.mood,
      activities: formData.activities.filter(activity => activity.trim()),
      photo: formData.photo
    };

    addDiary(newDiary);
    setFormData({
      title: '',
      content: '',
      mood: 'happy',
      activities: [''],
      photo: '/coco_5.png'
    });
    setShowForm(false);
  };

  const addActivity = () => {
    setFormData(prev => ({
      ...prev,
      activities: [...prev.activities, '']
    }));
  };

  const removeActivity = (index: number) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.filter((_, i) => i !== index)
    }));
  };

  const updateActivity = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.map((activity, i) => 
        i === index ? value : activity
      )
    }));
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
              Coco의 일기장 📖
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              매일매일 새로운 모습을 보여주는 Coco의 특별한 순간들을 
              일기로 기록하고 공유해요 ✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all border-4 border-orange-300 hover:scale-105"
            >
              <Plus size={24} />
              <span>새 일기 쓰기 ✨</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Diary Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-orange-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-8 h-8 text-orange-500" />
                  <h2 className="text-3xl font-bold text-gray-800">새 일기 쓰기</h2>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-orange-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-orange-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📝 제목
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                    placeholder="오늘 Coco는 어떤 하루를 보냈나요?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ✍️ 내용
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                    placeholder="Coco의 특별한 순간을 자세히 적어주세요..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📸 일기 사진 선택
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {availablePhotos.map((photo) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, photo: photo.src }))}
                        className={`p-3 rounded-xl border-2 transition-all ${
                          formData.photo === photo.src
                            ? 'border-orange-500 bg-orange-100 scale-105'
                            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                          <img
                            src={photo.src}
                            alt={photo.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-xs text-gray-600 font-medium text-center">
                          {photo.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    😊 오늘의 기분
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {Object.entries(moodEmojis).map(([mood, emoji]) => (
                      <button
                        key={mood}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mood: mood as keyof typeof moodEmojis }))}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.mood === mood
                            ? 'border-orange-500 bg-orange-100 scale-105'
                            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        <div className="text-3xl mb-2">{emoji}</div>
                        <div className="text-xs text-gray-600 font-medium">{moodLabels[mood as keyof typeof moodLabels]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🎯 오늘도 귀여워
                  </label>
                  <div className="space-y-3">
                    {formData.activities.map((activity, index) => (
                      <div key={index} className="flex space-x-3">
                        <input
                          type="text"
                          value={activity}
                          onChange={(e) => updateActivity(index, e.target.value)}
                          className="flex-1 px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                          placeholder="활동을 입력하세요 (예: 장난감 놀이)"
                        />
                        {formData.activities.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeActivity(index)}
                            className="px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors border-2 border-red-200"
                          >
                            <X size={20} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addActivity}
                      className="text-orange-500 hover:text-orange-600 text-lg font-medium hover:bg-orange-50 px-4 py-2 rounded-xl transition-colors"
                    >
                      ✨ + 활동 추가하기
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold text-lg hover:shadow-xl transition-all border-4 border-orange-300"
                  >
                    ✨ 일기 저장하기
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Diary List */}
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
              <Star className="w-8 h-8 text-amber-500" />
              <h2 className="text-4xl font-bold text-gray-800">
                Coco의 일기 모음
              </h2>
              <Star className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6">
              지금까지 기록된 Coco의 특별한 순간들을 확인해보세요 📚
            </p>
          </motion.div>

          <div className="grid gap-8">
            <AnimatePresence>
              {diaries.map((diary, index) => (
                <motion.div
                  key={diary.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-4 border-orange-200 relative">
                    {/* 말풍선 꼬리 */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-5xl">{moodEmojis[diary.mood]}</div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800 mb-2">
                            {diary.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Calendar size={20} />
                            <span className="text-lg font-medium">{diary.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                          {diary.content}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100 p-2 shadow-lg">
                          <img
                            src={diary.photo}
                            alt={diary.title}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      </div>
                    </div>

                    {diary.activities.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
                          <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
                          오늘도 귀여워
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {diary.activities.map((activity, activityIndex) => (
                            <span
                              key={activityIndex}
                              className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-lg font-bold shadow-md border-2 border-orange-200"
                            >
                              ✨ {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t-2 border-orange-200">
                      <div className="text-lg text-gray-600 font-medium">
                        기분: {moodLabels[diary.mood]}
                      </div>
                      <div className="flex items-center space-x-2 text-orange-500">
                        <Heart size={20} />
                        <span className="text-lg font-bold">특별한 순간 ✨</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {diaries.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-3xl border-4 border-orange-200 shadow-xl"
            >
              <BookOpen size={80} className="text-orange-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-500 mb-3">
                아직 기록된 일기가 없어요
              </h3>
              <p className="text-gray-400 text-lg">
                첫 번째 일기를 작성해보세요! ✨
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
