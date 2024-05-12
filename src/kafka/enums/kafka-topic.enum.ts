export const KafkaTopics = {
  test: 'test',
} as const;

export type KafkaTopic = keyof typeof KafkaTopics;
