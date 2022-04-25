// import { createServer, Model, belongsTo, Factory, association, hasMany, RestSerializer, } from "miragejs"

// export function makeServer({ environment = "development" } = {}) {
//   let server = createServer({
//     environment,
//     serializers: {
//       application: RestSerializer,
//       request: RestSerializer.extend({
//         include: [ "user", "department", "organization" ],
//         embed: true
//       }),
//       user: RestSerializer.extend({
//         include: [ "organization", "department", "requests", "campaigns" ],
//         embed: true
//       }),
//       department: RestSerializer.extend({
//         include: [ "organization", "users", "requests" ],
//         embed: true
//       }),
//       organization: RestSerializer.extend({
//         include: [ "users", "departments", "users", "campaigns" ],
//         embed: true
//       }),
//       campaign: RestSerializer.extend({
//         include: [ "organization", "user", "adsets" ],
//         embed: true
//       }),
//       adset: RestSerializer.extend({
//         include: [ "campaign" ],
//         embed: true
//       })
//     },

//     models: {
//       cache: Model,
//       storage: Model,
//       organization: Model.extend({
//         users: hasMany(),
//         departments: hasMany(),
//         requests: hasMany(),
//         campaigns: hasMany()
//       }),
//       department: Model.extend({
//         users: hasMany(),
//         requests: hasMany()
//       }), 
//       user: Model.extend({
//         organization: belongsTo(),
//         department: belongsTo(),
//         requests: hasMany(),
//         campaigns: hasMany()
//       }),
//       request: Model.extend({
//         user: belongsTo(),
//         department: belongsTo(),
//         organization: belongsTo()
//       }),
//       campaign: Model.extend({
//         user: belongsTo(),
//         organization: belongsTo(),
//         adset: hasMany()
//       }),
//       adset: Model.extend({
//         campaign: belongsTo()
//       })
//     },
    
//     factories: {
//       cache: Factory.extend({
//         email() {
//           return "test@test.com"
//         },
//         organization() {
//           return 'Test Org'
//         },
//         user() {
//           return 'Test User'
//         }
//       }),
//       storage: Factory.extend({
//         name() {
//           return {}
//         }
//       }),
//       department: Factory.extend({
//         name(i) {
//           let dept = [ 'Sales', 'Accounts', 'Marketing', 'Graphics', 'Web', 'Software' ]
//           return dept[ i % dept.length ]
//         } 
//       }),

//       organization: Factory.extend({
//         name(i) {
//           if (i === 0) {
//             return 'Kalen Marketing Solutions'
//           }
//           return `New Org ${i}`
//         },

//         address(i) {
//           return `Address ${i}`
//         },

//         phone() {
//           return '111-111-1111'
//         },
//       }),

//       user: Factory.extend({
//         name(i) {
//           return `Employee ${i}`
//         },
        
//         organization: association(),
        
//         email(i) {
//           return `email${i}@kalensolutions.com`
//         },
        
//         avatar() {
//           return null;
//         },

//         title(i) {
//           let job = [ "Owner", "Software Engineer", "Web Developer", "Designer", "Account Manager", ];
//           return job[ i % job.length ];
//         },

//         department: association(),

//         password() {
//           return 'password'
//         },

//         role(i) {
//           const role = [ 'Role 1', 'Role 2', 'Role 3', 'Role 4' ];
//           return role[ i % role.length ];
//         },

//         isAdmin() {
//           const checker = false;
//           if (checker) {
//             return !checker
//           }
//         },

//         emailVerified() {
//           return null;
//         },

//         canProof() {
//           const checker = false;
//           if (checker) {
//             return !checker
//           }
//         },

//         lead() {
//           return false;
//         },
//       }),

//       request: Factory.extend({
//         user: association(),
//         department: association(),
//         organization: association(),
//         formDates() {
//           return [
//             { date: '2021-10-01', paid: true }
//           ]
//         },
//         comments() {
//           return 'I am a comment'
//         },
//         status() {
//           return 'pending'
//         },
//         deptReview() {
//           return { status: 'pending', timeStamp: '', comments: '' }
//         },
//         hrReview() {
//           return { status: 'pending', timeStamp: '', comments: '' }
//         }
//       }),

//       campaign: Factory.extend({
//         organization: association(),

//         title() {
//           return '';
//         },

//         description() {
//           return '';
//         },
//       }),

//       adset: Factory.extend({
//         campaign: association(),
//         type() {
//           return '';
//         },

//         name() {
//           return '';
//         },

//         description() {
//           return ''
//         },

//         files() {
//           return [];
//         },

//       })
//     },

//     seeds(server) {
//       server.create('cache')
//       let kalen = server.create("organization", { name: "Kalen Marketing Solutions" })
//       let cccvb = server.create("organization", { name: 'CCCVB' })
//       let web = server.create("department", { name: "Web" })
//       let art = server.create("department", { name: "Art" })
//       let design = server.create("department", { name: "Design" })
//       let accounts = server.create("department", { name: "Accounts" })
//       let owner = server.create("department", { name: "Owner" })
//       let digital = server.create("department", { name: "Digital" })
//       let hr = server.create("department", { name: "HR" })
//       // let comp = server.create("organization", {name: "Test"})
//       let luke = server.create("user", { name: "Luke Henry", organization: kalen, email: "lhenry@kalensolutions.com", avatar: null, title: "Software Engineer", department: web, password: "1qaz!QAZ", role: "admin", isAdmin: true, emailVerified: null, canProof: true, lead: false})
//       let test = server.create("user", { name: "Test", organization: cccvb, email: "test@test.com", avatar: null, title: "Software Engineer", department: web, password: "1qaz!QAZ", role: "admin", isAdmin: true, emailVerified: null, canProof: true, lead: false})
//       let brad = server.create("user", { name: "Bradley Erickson", organization: kalen, email: "berickson@kalensolutions.com", avatar: null, title: "Software Engineer", department: web, password: "pa22w0rd", role: "admin", isAdmin: true, emailVerified: null, canProof: true, lead: false})
//       let mason = server.create("user", { name: "Mason Hall", organization: kalen, email: "mhall@kalensolutions.com", avatar: null, title: "Web Developer", department: web, password: "pa22w0rd", role: "admin", isAdmin: true, emailVerified: null, canProof: true, lead: true})
//       let tanner = server.create("user", { name: "Tanner Dobrenz", organization: kalen, email: "tdobrenz@kalensolutions.com", avatar: null, title: "Web Developer", department: web, password: "pa22w0rd", role: "employee", isAdmin: false, emailVerified: null, canProof: true, lead: false})
//       let sam = server.create("user", { name: "Samantha Anderson", organization: kalen, email: "sanderson@kalensolutions.com", avatar: null, title: "Office Manager", department: hr, password: "pa22w0rd", role: "admin", isAdmin: true, emailVerified: null, canProof: true })
//       // server.create("user", { name: "Test Client", organization: 'Test Company', email: "test@test.com", avatar: null, title: "Client", department: null, password: "password", role: "user", isAdmin: false, emailVerified: null, canProof: false })
//       server.create("campaign", { organization: cccvb, title: "Campaign 1", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', description: 'A sample adset', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: [
//           '@/assets/img/fakead1.jpeg',
//           '@/assets/img/fakead2.jpeg',
//           '@/assets/img/fakead3.jpeg',
//           '@/assets/img/fakead4.jpeg',
//           '@/assets/img/fakead5.jpeg',
//         ]},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 2", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1' 
//         }},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 3", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 4", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: [
//           '@/assets/img/fakead1.jpeg',
//           '@/assets/img/fakead2.jpeg',
//           '@/assets/img/fakead3.jpeg',
//           '@/assets/img/fakead4.jpeg',
//           '@/assets/img/fakead5.jpeg',
//         ]},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 5", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1' 
//         }},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 6", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 7", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: [
//           '@/assets/img/fakead1.jpeg',
//           '@/assets/img/fakead2.jpeg',
//           '@/assets/img/fakead3.jpeg',
//           '@/assets/img/fakead4.jpeg',
//           '@/assets/img/fakead5.jpeg',
//         ]},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 8", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1' 
//         }},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })
//       server.create("campaign", { organization: cccvb, title: "Campaign 9", description: "A sample campaign", ads: [ 
//         { type: 'social', name: 'Adset 1', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'social', name: 'Adset 2', files: {
//           name: 'Social Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'video', name: 'Adset 3', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'video', name: 'Adset 4', files: {
//           name: 'Video',
//           url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' 
//         }},
//         { type: 'print', name: 'Adset 5', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'print', name: 'Adset 6', files: {
//           name: 'Print Picture',
//           url: '@/assets/img/fakead1.jpeg' 
//         }},
//         { type: 'digital', name: 'Adset 7', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//         { type: 'digital', name: 'Adset 8', files: {
//           name: 'Some Kinda Name?',
//           url: '' 
//         }},
//        ] })

//       server.create("request", { 
//         user: test, 
//         formDates: [ { date: '2021-09-17', paid: true } ], 
//         status: 'pending', 
//         comments: 'I am a new comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         } 
//       })
//       server.create("request", { 
//         user: luke, 
//         formDates: [ { date: '2021-09-17', paid: true } ], 
//         status: 'pending', 
//         comments: 'I am a new comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         } 
//       })
//       server.create("request", { 
//         user: luke, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'approved', 
//         comments: 'I am a new comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         } 
//       })
//       server.create("request", { 
//         user: luke, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'rejected', 
//         comments: 'I am a new comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         } 
//       })



//       server.create("request", { 
//         user: brad, 
//         formDates: [ { date: '2021-09-10', paid: false } ], 
//         status: 'approved', 
//         comments: 'I am a comment' 
//       })
//       server.create("request", { 
//         user: brad, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'approved', 
//         comments: 'I am a comment' 
//       })
//       server.create("request", { 
//         user: brad, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'rejected', 
//         comments: 'I am a comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         }  
//       })




//       server.create("request", { 
//         user: mason, 
//         formDates: [ { date: '2021-09-17', paid: true } ], 
//         status: 'pending', 
//         comments: 'I am a new comment' 
//       })
//       server.create("request", { 
//         user: mason, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'approved', 
//         comments: 'I am a new comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         }  
//       })
//       server.create("request", { 
//         user: mason, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'rejected', 
//         comments: 'I am a new comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         }  
//       })



//       server.create("request", { 
//         user: tanner, 
//         formDates: [ { date: '2021-09-10', paid: false } ], 
//         status: 'approved', 
//         comments: 'I am a comment' 
//       })
//       server.create("request", { 
//         user: tanner, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'approved', 
//         comments: 'I am a comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           }, 
//           comments: ''
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: ''
//         }  
//       })
//       server.create("request", { 
//         user: tanner, 
//         formDates: [ 
//           { date: '2021-09-19', paid: false },
//           { date: '2021-09-20', paid: false },
//           { date: '2021-09-21', paid: true },
//           { date: '2021-09-22', paid: true } 
//         ], 
//         status: 'rejected', 
//         comments: 'I am a comment',
//         deptReview: {
//           status: 'pending',
//           timeStamp: {
//             date: '',
//             time: ''
//           },
//           comments: '',
//         },
//         hrReview: {
//           status: 'pending',
//           timeStamp: {
//             date:'',
//             time: ''
//           },
//           comments: '',
//         }  
//       })


//       server.create("request", { 
//         user: sam, 
//         formDates: [ { date: '2021-09-17', paid: true } ], 
//         status: 'pending', 
//         comments: 'I am a new comment' 
//       })

//       server.createList('user', 5, { organization: kalen, department: web })
//       server.createList('user', 3, { organization: kalen, department: digital })
//       server.createList('user', 2, { organization: kalen, department: accounts })
//       server.createList('user', 1, { organization: kalen, department: owner })
//       server.createList('user', 3, { organization: kalen, department: design })
//       server.createList('user', 3, { organization: kalen, department: art })
//       server.createList('user', 5)
//       server.createList('user', 5)
//       server.createList('user', 5)
//       server.createList('user', 5)
//     },

//     // THESE WERE THE ORIGINAL SEEDS FOR USERS: MAYBE FOR LATER

    
//     routes() {
//       // ( TEST CASE
//             // this.get("/sanctum/csrf-cookie", (schema) => {
//             //   return schema.users.all()
//             // })
//       // )

//       // MAY USE THIS LATER
//       // this.namespace = ""


// // -------------------------LOGIN/AUTH ROUTES----------------------------

//       this.get("/sanctum/csrf-cookie", (schema) => {
//         // log in for 24 hours
//         let now = new Date()
//         let cookieExpiration = new Date(now.getTime() + 24 * 3600 * 1000)
//         document.cookie = `remember_me=cookie-content-here; domain=.dev-domain; path=/; expires=${cookieExpiration.toUTCString()};`
//         return schema.users.find(1)
//       })
      
//       this.post('/users/login', (schema, request) => {
//         let now = new Date()
//         let cookieExpiration = new Date(now.getTime() + 24 * 3600 * 1000)
//         document.cookie = `remember_me=cookie-content-here; domain=.dev-domain; path=/; expires=${cookieExpiration.toUTCString()};`
//         const attrs = JSON.parse(request.requestBody);
//         console.log(attrs.email)
//         console.log(schema)
//         let cache = schema.caches.find(1);
//         console.log('This is the cache: ', cache)
//         cache.update({ email: attrs.email })
//         console.log('This post request works')
//         return { user: attrs.email }
//       })

//       this.get('/api/users/auth', (schema) => {
//         let cache = schema.caches.find(1);
//         console.log('cache: ', cache)
//         let response = { data: schema.users.findBy({ email: cache.email }) }
//         console.log('Where the fuck is it? 1')
//         let org = schema.organizations.find(response.data.organizationId)
//         console.log('Org ID: ', response.data.organizationId)
//         // console.log('Where the fuck is it? 2')
//         response.data.attrs.organization = org.name
//         console.log('Where the fuck is it? 3')
//         let dept = schema.departments.find(response.data.departmentId)
//         console.log('Dept ID: ', response.data.departmentId)
//         // console.log('Where the fuck is it? 4')
//         response.data.attrs.department = dept.name
//         console.log('Where the fuck is it? 5')
//         console.log('I have a working route for auth')
//         console.log('This is the request: ', response)
//         return response
//       })

//       this.post('/logout', (schema) => {
//         console.log('I have a working logout route');
//         return schema.users.none();
//       })

//       this.put('/account', (schema, request) => {
//         console.log('I have a working update user route')
//         console.log('What am I getting here? ', request)
//         console.log(request.requestBody)
//         const attrs = JSON.parse(request.requestBody);
//         let cache = schema.caches.find(1);
//         let response = schema.users.findBy({ email: cache.email })
//         console.log('response: ', response)
//         cache.update({ email: attrs.email })
//         console.log('BEFORE: ', schema.users.find(4))
//         response.update({ email: attrs.email })
//         console.log('AFTER: ', schema.users.find(4))
//         return response 
//       })

//       this.post('/email/verification-notification', () => {
//         console.log('Working email verify route')
//       })

//       this.post('/forgot-password', (schema, request) => {
//         console.log(`Need API for full functionality`)
//         console.log('I have a working update user route')
//         console.log('What am I getting here? ', request)
//         console.log(request.requestBody)
//         const attrs = JSON.parse(request.requestBody);
//         let cache = schema.caches.find(1);
//         let response = schema.users.findBy({ email: cache.email })
//         console.log('response: ', response)
//         cache.update({ email: attrs.email })
//         console.log('BEFORE: ', schema.users.find(4))
//         response.update({ email: attrs.email })
//         console.log('AFTER: ', schema.users.find(4))
//         return response 
//       })

//       this.post('/reset-password', (schema, request) => {
//         console.log('I have a working update user route')
//         console.log('What am I getting here? ', request)
//         console.log(request.requestBody)
//         const attrs = JSON.parse(request.requestBody);
//         let cache = schema.caches.find(1);
//         let response = schema.users.findBy({ email: cache.email })
//         console.log('response: ', response)
//         cache.update({ email: attrs.email })
//         console.log('BEFORE: ', schema.users.find(4))
//         response.update({ email: attrs.email })
//         console.log('AFTER: ', schema.users.find(4))
//         return response 
//       })

//       this.put('user/password', (schema, request) => {
//         console.log('I have a working update password route')
//         console.log('What am I getting here? ', request)
//         console.log(request.requestBody)
//         const attrs = JSON.parse(request.requestBody);
//         let cache = schema.caches.find(1);
//         let response = schema.users.findBy({ email: cache.email })
//         console.log('response: ', response)
//         cache.update({ password: attrs.password })
//         console.log('BEFORE: ', schema.users.find(1))
//         response.update({ password: attrs.password })
//         console.log('AFTER: ', schema.users.find(1))
//         return response 
//       })


      
// // ------------------------ORGANIZATIONS----------------------------
      
      
//       this.get('/api/organizations', (schema) => {
//         console.log('Get request for organizations')
//         return schema.organizations.all()
//       })

//       this.post('/api/organizations', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody)
//         return schema.organizations.create(attrs)
//       })

//       this.post('/organizations/:id', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody);
//         console.log(attrs.organization)
//         console.log(schema)
//         let cache = schema.caches.find(1);
//         cache.update({ organization: attrs.organization })
//         console.log('This post request works')
//         return { cache: attrs.organization }
//       })

//       this.delete('/api/organizations/:id', (schema, request) => {
//         console.log('Deleting Selected Organization')
//         const { id } = request.params
//         schema.organizations.find(id).destroy()
//         return schema.organizations.all()
//       })

//       this.put('/api/organizations/:id', (schema, request) => {
//         const { id } = request.params
//         const attrs = JSON.parse(request.requestBody)
//         console.log(request.requestBody)
//         console.log('Test: ', schema.organizations.find(id).update(attrs))
//         return schema.organizations.find(id).update(attrs)
//       })

//       this.get('/api/organizations/:id', (schema, request) => {
//         const { id } = request.params
//         let store = schema.organizations.find(id)
//         console.log('This is the store: ', store)
//         console.log('Organization schema: ', schema)
//         let cache = schema.caches.find(1);
//         console.log('Cache: ', cache)
//         cache.update({ organization: store })
//         return store;
//       })

//       // ------------------------DEPARTMENTS------------------------------

//       this.get('/api/departments', (schema) => {
//         console.log('Get request for departments')
//         return schema.departments.all()
//       })

//       this.post('/api/departments', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody)
//         return schema.departments.create(attrs)
//       })

//       this.delete('/api/departments/:id', (schema, request) => {
//         console.log('Deleting Selected Department')
//         let { id } = request.params
//         schema.departments.find(id).destroy()
//         return schema.departments.all()
//       })

//       this.put('/api/departments/:id', (schema, request) => {
//         const { id } = request.params
//         const attrs = JSON.parse(request.requestBody)
//         return schema.departments.find(id).update(attrs)
//       })

//       // ----------------------------USERS--------------------------------

//       this.get('/api/users', (schema) => {
//         console.log('Get request for users')
//         return schema.users.all()
//       })
      
//       this.get('/api/users/:id', (schema, request) => {
//         const { id } = request.params
//         let store = schema.users.find(id)
//         console.log('This is the store: ', store)
//         console.log('Organization schema: ', schema)
//         let cache = schema.caches.find(1);
//         console.log('Cache: ', cache)
//         cache.update({ user: store })
//         return store;
//       })

//       this.post('/api/users', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody)
//         return schema.users.create(attrs)
//       })

//       this.delete('/users/:id', (schema, request) => {
//         console.log('Deleting Selected Department')
//         let { id } = request.params
//         schema.users.find(id).destroy()
//         return 
//       })

//       this.put('/api/users/:id', (schema, request) => {
//         const { id } = request.params
//         const attrs = JSON.parse(request.requestBody)
//         return schema.users.find(id).update(attrs)
//       })

//       this.get('/api/organizations/users/:id', (schema, request) => {
//         const { id } = request.params
//         const org = schema.organizations.find(id)
//         console.log('I have a working route for orgUsers')
//         console.log('cache.organization.name: ', org.attrs.name)
//         console.log(request.params)
//         console.log(schema.users.all())
//         console.log('org from server: ', org.attrs.name)
//         // THIS NEEDS TO BE FIXED.... SHOULD BE .findBy({ organizationId: id })
//         let store = schema.users.all()
//         console.log('User store: ', store)
//         return store
//       })

//       this.get('/api/departments/users/:id', (schema, request) => {
//         const { id } = request.params
//         const dept = schema.departments.find(id)
//         console.log('I have a working route for deptUsers')
//         console.log('cache.departments.name: ', dept.attrs.name)
//         console.log(request.params)
//         console.log(schema.users.all())
//         console.log('dept from server: ', dept.attrs.name)
//         // THIS NEEDS TO BE FIXED.... SHOULD BE .findBy({ departmentId: id })
//         let store = schema.users.all()
//         console.log('User store: ', store)
//         return store
//       })

//       this.get('/api/users/lead', (schema) => {
//         console.log('I have a working GET LEAD request')
//         console.log('GET LEAD from Mirage: ', schema.users.where({ lead: true }))
//         return schema.users.where({ lead: true })
//       })

//       this.get('/api/users/hr', (schema) => {
//         console.log('I have a working GET HR request')
//         console.log('GET HR from Mirage: ', schema.users.where({ name: 'Samantha Anderson' }))
//         return schema.users.where({ name: 'Samantha Anderson' })
//       })


// // --------------- [ TIMEOFF REQUEST ] -----------------------

//       this.post('/api/requests', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody)
//         return schema.requests.create(attrs)
//       })
      
//       this.get('/api/requests', (schema) => {
//         console.log('Working request GET route')
//         return schema.requests.all()
//       })

//       this.get('/api/requests/:id', (schema, request) => {
//         console.log('Working request GET-ONE route')
//         const { id } = request.params
//         return schema.requests.find(id)
//       })

//       this.get('/api/departments/requests/:id', (schema, request) => {
//         const collected = []
//         const { id } = request.params;
//         const dept = schema.departments.find(id)
//         console.log('dept: ', dept)
//         const user = schema.users.where({ departmentId: id })
//         console.log('user: ', user)
//         collected.push(user)
//         const store = schema.requests.where({ user: user })
//         console.log('store: ', store)
//         return schema.requests.all()
//       })

//       this.get('/api/requests/?status=:status', (schema, request) => {
//         console.log('Working request GET-ONE route')
//         const { status } = request.params
//         return schema.requests.where(status)
//       })

//       this.put('api/requests/:id', (schema, request) => {
//         const { id } = request.params
//         console.log(`I have a working REVIEW request for id: ${id}`)
//         const attrs = JSON.parse(request.requestBody)
//         console.log(schema.requests.find(id).update(attrs))
//         return schema.requests.find(id).update(attrs)
//       })


// // --------------------- CAMPAIGNS --------------------

//       this.post('/multiple-files', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody)
//         console.log('proof: ', schema.users.all())
//         return schema.requests.create(attrs)
//       })
      
//       this.get('/api/proofs', (schema) => {
//         console.log('Working proofs GET route')
//         console.log('ALL PROOFS: ', schema.campaigns.all())
//         return schema.campaigns.all()
//       })

//       this.get('/api/proofs/:id', (schema, request) => {
//         console.log('Working proofs GET-ONE route')
//         const { id } = request.params
//         return schema.campaigns.find(id)
//       })

//       this.post('/api/proofs', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody)
//         console.log('proof: ', schema.campaigns.all())
//         return schema.campaigns.create(attrs)
//       })

//       this.put('/api/users/:id', (schema, request) => {
//         const { id } = request.params
//         const attrs = JSON.parse(request.requestBody)
//         return schema.users.find(id).update(attrs)
//       })

//       this.delete('/api/proofs/:id', (schema, request) => {
//         console.log('Deleting Selected campaign')
//         const { id } = request.params
//         return schema.campaigns.find(id).destroy()
//       })

//       this.put('/api/proofs/:id', (schema, request) => {
//         const { id } = request.params
//         const attrs = JSON.parse(request.requestBody)
//         return schema.campaigns.find(id).update(attrs)
//       })


// // ------------------------- ADSETS -----------------------

//       this.get('/api/adsets', schema => {
//         console.log('Working ADSETS GET route')
//         console.log('ALL ADSETS: ', schema.adsets.all())
//         return schema.adsets.all()
//       })

//       this.get('/api/adsets/:id', (schema, request) => {
//         console.log('Working adsets GET-ONE route')
//         const { id } = request.params
//         return schema.adsets.find(id)
//       })

//       this.post('/api/adsets', (schema, request) => {
//         const attrs = JSON.parse(request.requestBody)
//         console.log('adset: ', schema.adsets.all())
//         return schema.adsets.create(attrs)
//       })

//       this.delete('/api/adsets/:id', (schema, request) => {
//         console.log('Deleting Selected Adset')
//         const { id } = request.params
//         return schema.adsets.find(id).destroy()
//       })

//       this.put('/api/proofs/:id', (schema, request) => {
//         const { id } = request.params
//         const attrs = JSON.parse(request.requestBody)
//         return schema.campaigns.find(id).update(attrs)
//       })
//     },
//   })

//   return server
// }