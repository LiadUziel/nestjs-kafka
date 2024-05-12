import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer/producer.service';
import { KafkaTopics } from './kafka/enums/kafka-topic.enum';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello() {
    await this.producerService.produce({
      topic: KafkaTopics.test,
      messages: [
        {
          value: 'Hello World',
        },
      ],
    });
  }
}
