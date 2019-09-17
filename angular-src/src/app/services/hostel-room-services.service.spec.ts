import { TestBed, inject } from '@angular/core/testing';

import { HostelRoomServicesService } from './hostel-room-services.service';

describe('HostelRoomServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostelRoomServicesService]
    });
  });

  it('should be created', inject([HostelRoomServicesService], (service: HostelRoomServicesService) => {
    expect(service).toBeTruthy();
  }));
});
