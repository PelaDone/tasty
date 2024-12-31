import { sleep } from './utils';

export class RateLimiter {
  private lastRequestTime: number = 0;
  private requestInterval: number;

  constructor(requestsPerMinute: number) {
    // Calculate interval in milliseconds between requests
    this.requestInterval = (60 * 10000) / requestsPerMinute;
  }

  async waitForNextRequest(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.requestInterval) {
      const waitTime = this.requestInterval - timeSinceLastRequest;
      await sleep(waitTime);
    }
    
    this.lastRequestTime = Date.now();
  }
}