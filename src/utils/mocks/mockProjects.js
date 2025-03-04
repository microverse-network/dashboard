const mockProjects = [
  {
    _id: 'BVqz9Vyv51amjVEzFwXecRa8k023',
    hash: '0x543AB43A345BCD4D',
    name: 'Service1',
    limit: '300 calls/min',
    version: '2.5',
    versions: [1.1, 1.2, 1.3, 2.1],
    meta: {
      created: new Date(),
    },
    labels: [],
    healthcheck: 'Running',
    environment: 'Chrome 63.0',
    region: 'Node',
    methods: [
      { name: 'Square', signature: 'Number, Function' },
      { name: 'Lookup', signature: 'String | Object, Function' },
    ],
    logs: [
      {
        _id: 1,
        service: 'Service1',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 2,
        service: 'Service1',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 3,
        service: 'Service1',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 4,
        service: 'Service1',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 5,
        service: 'Service1',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 6,
        service: 'Service1',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
    ],
    versionhistory: [
      {
        _id: 1,
        version: 0.1,
        timestamp: new Date().toString(),
      },
      {
        _id: 2,
        version: 0.2,
        timestamp: new Date().toString(),
      },
      {
        _id: 3,
        version: 0.3,
        timestamp: new Date().toString(),
      },
      {
        _id: 4,
        version: 0.4,
        timestamp: new Date().toString(),
      },
      {
        _id: 5,
        version: 0.5,
        timestamp: new Date().toString(),
      },
      {
        _id: 6,
        version: 0.6,
        timestamp: new Date().toString(),
      },
    ],
  },
  {
    _id: 'BVqz9Vyv51amjVEzFwXecRa8k024',
    hash: '0x543AB43A345BCD4E',
    name: 'Service2',
    limit: '300 calls/min',
    version: '2.3',
    versions: [1.1, 1.2, 1.3, 2.1],
    meta: {
      created: new Date(),
    },
    labels: [],
    healthcheck: 'Running',
    environment: 'Chrome 63.0',
    region: 'Node',
    methods: [
      { name: 'Square', signature: 'Number, Function' },
      { name: 'Lookup', signature: 'String | Object, Function' },
    ],
    logs: [
      {
        _id: 1,
        service: 'Service2',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 2,
        service: 'Service2',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 3,
        service: 'Service2',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 4,
        service: 'Service2',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 5,
        service: 'Service2',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
      {
        _id: 6,
        service: 'Service2',
        timestamp: new Date().toString(),
        message: '171228/195556.769 [response]: get /healthcheck {}  (2ms)',
      },
    ],
    versionhistory: [
      {
        _id: 1,
        version: 0.1,
        timestamp: new Date().toString(),
      },
      {
        _id: 2,
        version: 0.2,
        timestamp: new Date().toString(),
      },
      {
        _id: 3,
        version: 0.3,
        timestamp: new Date().toString(),
      },
      {
        _id: 4,
        version: 0.4,
        timestamp: new Date().toString(),
      },
      {
        _id: 5,
        version: 0.5,
        timestamp: new Date().toString(),
      },
      {
        _id: 6,
        version: 0.6,
        timestamp: new Date().toString(),
      },
    ],
  },
]

export default mockProjects
