import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './kafka/consumer/consumer.service';
import { KafkaTopics } from './kafka/enums/kafka-topic.enum';

@Injectable()
export class TestConsumer implements OnModuleInit {
  constructor(private readonly consumerService: ConsumerService) {}

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: [KafkaTopics.test] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            value: `${message.value}`,
            topic: `${topic}`,
            partition: `${partition}`,
          });
        },
      },
    );
  }
}
