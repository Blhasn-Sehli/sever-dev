const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const productData = [
    {
        name: 'Product 1',
        price: 1999, // 19.99 USD
        quantity: 15,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/1/p/7593/322/800/01/7593322800_6_1_8.jpg?t=1697019619048&imwidth=1920',
        status: 'OnStock',
        type: 'Normal',
        isWished: false,
        categoryId: 1,
        userId: 1

    },
    {
        name: 'Product 2',
        price: 2999, // 29.99 USD
        quantity: 20,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/209/015/7392209015_2_10_8.jpg?t=1697019618126&imwidth=850',
        status: 'OnSale',
        type: 'NFT',
        isWished: true,
        categoryId: 2,
        userId: 1
    },
    {
        name: 'Product 3',
        price: 3999, // 39.99 USD
        quantity: 8,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/1/p/3676/304/407/3676304407_6_1_8.jpg?t=1697022675768&imwidth=1920',
        status: 'OnStock',
        type: 'Normal',
        isWished: false,
        categoryId: 2,
        userId: 1
    },
    {
        name: 'Product 4',
        price: 4999, // 49.99 USD
        quantity: 12,
        image: 'https://static.pullandbear.net/2/photos//2023/I/1/1/p/1348/240/002/01/1348240002_2_12_8.jpg?t=1697023273665&imwidth=850',
        status: 'OutOfStock',
        type: 'NFT',
        isWished: true,
        categoryId: 3,
        userId: 1
    },
    {
        name: 'Product 5',
        price: 5999, // 59.99 USD
        quantity: 25,
        image: 'https://static.pullandbear.net/2/photos//2023/I/1/1/p/1348/240/001/1348240001_2_12_8.jpg?t=1697023273360&imwidth=850',
        status: 'OnStock',
        type: 'Normal',
        isWished: false,
        categoryId: 1,
        userId: 1
    },
    {
        name: 'Product 6',
        price: 6999, // 69.99 USD
        quantity: 18,
        image: 'https://static.pullandbear.net/2/photos//2023/I/1/1/p/1204/240/100/02/1204240100_5_1_8.jpg?t=1696503012052&imwidth=1920',
        status: 'OnSale',
        type: 'NFT',
        isWished: true,
        categoryId: 2,
        userId: 1
    },
    {
        name: 'Product 7',
        price: 7999, // 79.99 USD
        quantity: 30,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/2/p/7861/525/015/7861525015_4_1_8.jpg?t=1690898952994&imwidth=750',
        status: 'Soon',
        type: 'Normal',
        isWished: false,
        categoryId: 1,
        userId: 1
    },
    {
        name: 'Product 8',
        price: 8999, // 89.99 USD
        quantity: 10,
        image: 'https://static.pullandbear.net/2/photos//2023/I/1/2/p/5053/240/040/5053240040_2_9_8.jpg?t=1695812525725&imwidth=750',
        status: 'OnStock',
        type: 'NFT',
        isWished: true,
        categoryId: 3,
        userId: 1
    },
    {
        name: 'Product 9',
        price: 9999, // 99.99 USD
        quantity: 14,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/2/p/4230/538/802/4230538802_2_6_8.jpg?t=1692268877096&imwidth=750',
        status: 'OnStock',
        type: 'Normal',
        isWished: false,
        categoryId: 2,
        userId: 1
    },
    {
        name: 'Product 10',
        price: 10999, // 109.99 USD
        quantity: 22,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/2/p/4238/501/518/4238501518_6_1_8.jpg?t=1685624657021&imwidth=750',
        status: 'OnSale',
        type: 'NFT',
        isWished: true,
        categoryId: 2,
        userId: 1
    },
    {
        name: 'Product 11',
        price: 11999, // 119.99 USD
        quantity: 9,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/2/p/7245/501/800/7245501800_2_6_8.jpg?t=1693921088283&imwidth=750',
        status: 'OutOfStock',
        type: 'Normal',
        isWished: false,
        categoryId: 1,
        userId: 1
    },
    {
        name: 'Product 12',
        price: 12999, // 129.99 USD
        quantity: 16,
        image: 'https://static.pullandbear.net/2/photos//2023/I/0/2/p/7242/581/401/7242581401_4_1_8.jpg?t=1689321040987&imwidth=750',
        status: 'OnStock',
        type: 'NFT',
        isWished: true,
        categoryId: 1,
        userId: 1
    },
];
const categoryData = [
    {
        type: 'men',
    },
    {
        type: 'women',
    },
    {
        type: 'child',
    },
];
// const userChatRoomData = [
//     {
//         userId: 1,  // Replace with actual user IDs
//         chatRoomId: 1,  // Replace with actual chat room IDs
//     },
//     {
//         userId: 2,
//         chatRoomId: 2,
//     },
//     {
//         userId: 3,
//         chatRoomId: 3,
//     },
//     {
//         userId: 4,
//         chatRoomId: 4,
//     },
//     {
//         userId: 5,
//         chatRoomId: 5,
//     },
//     {
//         userId: 6,
//         chatRoomId: 6,
//     },
//     {
//         userId: 7,
//         chatRoomId: 7,
//     },
//     {
//         userId: 8,
//         chatRoomId: 8,
//     },
//     {
//         userId: 9,
//         chatRoomId: 9,
//     },
//     {
//         userId: 10,
//         chatRoomId: 10,
//     },
//     {
//         userId: 11,
//         chatRoomId: 11,
//     },
//     {
//         userId: 12,
//         chatRoomId: 12,
//     },
// ];
const messageData = [
    {
        content: 'Hello!',
        chatRoomId: 1, // Replace with the actual chat room ID
        sender: 1, // Replace with the actual user ID
    },
    {
        content: 'Hi there!',
        chatRoomId: 1, // Replace with the actual chat room ID
        sender: 2, // Replace with the actual user ID
    },
    {
        content: 'How are you?',
        chatRoomId: 2, // Replace with the actual chat room ID
        sender: 3, // Replace with the actual user ID
    },
    {
        content: 'I\'m doing well, thanks!',
        chatRoomId: 2, // Replace with the actual chat room ID
        sender: 4, // Replace with the actual user ID
    },
    {
        content: 'What\'s new?',
        chatRoomId: 3, // Replace with the actual chat room ID
        sender: 5, // Replace with the actual user ID
    },
    {
        content: 'Not much, just working on a project.',
        chatRoomId: 3, // Replace with the actual chat room ID
        sender: 6, // Replace with the actual user ID
    },
    {
        content: 'Do you need any help?',
        chatRoomId: 4, // Replace with the actual chat room ID
        sender: 7, // Replace with the actual user ID
    },
    {
        content: 'Sure, that would be great!',
        chatRoomId: 4, // Replace with the actual chat room ID
        sender: 7 // Replace with the actual user ID
    },
    {
        content: 'Let\'s schedule a meeting.',
        chatRoomId: 5, // Replace with the actual chat room ID
        sender: 7 // Replace with the actual user ID
    },
    {
        content: 'Sounds good. How about next Wednesday?',
        chatRoomId: 5, // Replace with the actual chat room ID
        sender: 7, // Replace with the actual user ID
    },
    {
        content: 'Meeting confirmed!',
        chatRoomId: 6, // Replace with the actual chat room ID
        sender: 7, // Replace with the actual user ID
    },
    {
        content: 'Great! See you then!',
        chatRoomId: 6, // Replace with the actual chat room ID
        sender: 7, // Replace with the actual user ID
    },
];
const chatRoomData = [
    {
        name: 'Room 1',
    },
    {
        name: 'Room 2',
    },
    {
        name: 'Room 3',
    },
    {
        name: 'Room 4',
    },
    {
        name: 'Room 5',
    },
    {
        name: 'Room 6',
    },
    {
        name: 'Room 7',
    },
    {
        name: 'Room 8',
    },
    {
        name: 'Room 9',
    },
    {
        name: 'Room 10',
    },
    {
        name: 'Room 11',
    },
    {
        name: 'Room 12',
    },
];
const postData = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3erTK11PJLIDxYltJBnvMWGYhs98QkYdlF0W7tMn-hsUdn-ncqc_FyCo7fh-jBroybAs&usqp=CAU',
        content: 'This is the first post.',
        numLikes: 20,
        numShares: 5,
        userId: 1, // Replace with the actual user ID
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PCTptYq2l2aQmumiJiCDQGXULqi1NQu_mmeHld1TZ6lspN8gNmeQ96vOKSeiAQSyOsk&usqp=CAU',
        content: 'A beautiful sunset!',
        numLikes: 50,
        numShares: 10,
        userId: 2, // Replace with the actual user ID
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWIm41hcMX3pBhr7tsQCW9foQi_iS_RtP7HL5YS1VPbyrVsP0fdtWs6AScprAMDRDTGw&usqp=CAU',
        content: 'Exploring new places!',
        numLikes: 30,
        numShares: 8,
        userId: 3, // Replace with the actual user ID
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD25c5fSfL1zuSujAZEljypgiILp8bVx2jtWbCVTs_eIA07M1UfKdKeJWoW_bMXZdm9C0&usqp=CAU',
        content: 'Foodie adventure!',
        numLikes: 40,
        numShares: 12,
        userId: 4, // Replace with the actual user ID
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSM_GdNv-OtIOqMBfAPSrvk2VkTMOw-kVB52S4Pnp_y1uKI5FjkpJVn40JFmLXxhf3cvU&usqp=CAU',
        content: 'Coding all day!',
        numLikes: 60,
        numShares: 15,
        userId: 5, // Replace with the actual user ID
    },
    {
        image: 'https://www.diariesofmagazine.com/wp-content/uploads/2018/02/WEB_VAL_8895-e1518892150624.jpg',
        content: 'Hiking in the mountains.',
        numLikes: 25,
        numShares: 7,
        userId: 6, // Replace with the actual user ID
    },
    {
        image: 'https://images.moneycontrol.com/static-mcnews/2020/07/online-gaming-1-770x433.jpg?impolicy=website&width=770&height=431',
        content: 'Gaming time!',
        numLikes: 70,
        numShares: 18,
        userId: 7, // Replace with the actual user ID
    },
    {
        image: 'https://blog.currentcatalog.com/wp-content/uploads/2018/09/Reading.jpg',
        content: 'Reading a good book.',
        numLikes: 35,
        numShares: 9,
        userId: 3, // Replace with the actual user ID
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-4tH3pAfPgzHYKU-IQ_hUp5UyiSne7BzQaZSRBRh6sIIO6HOLoN8Ehw6USBauyYCCok&usqp=CAU',
        content: 'Weekend relaxation.',
        numLikes: 45,
        numShares: 11,
        userId: 1, // Replace with the actual user ID
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VbSkvj5yjeUXwunxHpPotIj3SRI1vL9fbsCndCz0ueLJkzTvi-DjK-oIRLzb0P9rqXo&usqp=CAU',
        content: 'Artistic expression.',
        numLikes: 55,
        numShares: 13,
        userId: 2, // Replace with the actual user ID
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEhjJyN1eHdHKBOQlq8-M7JPizJ2uGFYKU1ttNm0j5iAPME9j-ksYajv1-zF2ox8eauQ&usqp=CAU',
        content: 'Traveling the world.',
        numLikes: 33,
        numShares: 7,
        userId: 1, // Replace with the actual user ID
    },
    {
        image: 'https://www.trainheroic.com/wp-content/uploads/2022/12/AdobeStock_308728099-TH-jpg.webp',
        content: 'Fitness goals!',
        numLikes: 75,
        numShares: 20,
        userId: 7, // Replace with the actual user ID
    },
];

async function main() {
    // await prisma.category.createMany({
    //     data: categoryData
    // });
    // await prisma.product.createMany({
    //     data: productData
    // });
    // await prisma.chatRoom.createMany({
    //     data : chatRoomData
    // })
    // await prisma.message.createMany({
    //     data : messageData
    // })
    await prisma.post.createMany({
        data: postData
    });

    // ... you will write your Prisma Client queries here
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
// Be Careful Before You Create Data See The Prisma Schema 
const dummyUsers = [
    {
        "firstName": "Alice",
        "lastName": "Johnson",
        "profileImage": "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600",
        "coverImage": "https://mir-s3-cdn-cf.behance.net/projects/808/9b7b19144231085.Y3JvcCwxNzM1LDEzNTcsMTAzMSwyMDc1.jpg",
        "email": "alice.johnson@example.com",
        "password": "password123",
        "dateOfBirth": "1995-03-15",
        "type": "regular",
        "followers": 50
    },
    {
        "firstName": "ZARA",
        "lastName": "none",
        "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5Q2gj2tZBmWnEzfw72EhwSr_6olGYGewnDJluudTcNCNa9FaX4Ghln5khvJtbGnmNC0&usqp=CAU",
        "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpjZ3XYsPUVA7MQCoBYBFw7t2Q8RIO9PKhcv0jsepEUzWnYKndsDF_fy70r5ZwvTtNt8&usqp=CAU",
        "email": "bob.smith@example.com",
        "password": "securepass456",
        "dateOfBirth": "1988-12-04",
        "type": "brand",
        "followers": 20
    },
    {
        "firstName": "Charlie",
        "lastName": "Brown",
        "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIvCtTqhUF4RZxlmaRn1Vdd_ON0oYPHI37j9s0Fbi-klyyLmW59wRx1dykGv46SqZTnc&usqp=CAU",
        "coverImage": "https://example.com/charlie_cover.jphttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MZ9TRzLypmSwZNifNKAjBTyprGjvxL68FtBlxZWSAuy5p_R1C1LI4svsnyOpiIJENJ8&usqp=CAUg",
        "email": "charlie.brown@example.com",
        "password": "charliePass789",
        "dateOfBirth": "1992-07-20",
        "type": "fashionista",
        "followers": 80
    },
    {
        "firstName": "David",
        "lastName": "Miller",
        "profileImage": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        "coverImage": "https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_640.jpg",
        "email": "david.miller@example.com",
        "password": "davidPass123",
        "dateOfBirth": "1987-05-10",
        "type": "regular",
        "followers": 60
    },
    {
        "firstName": "P&B",
        "lastName": "none",
        "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYabWdxV47C6HjRYAW72TeogFn_RIF75rypdt_NDNKpj5jzx6cYsnA2ze3lUdn1AQyxk&usqp=CAU",
        "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkEbmeuAxmPbv4prfubM_gqiY4f6Qf2h22AYTN_ISRMMOMjQEDQOpJNzVjK3EvAVop6E&usqp=CAU",
        "email": "ella.davis@example.com",
        "password": "ellaPass456",
        "dateOfBirth": "1996-09-25",
        "type": "brand",
        "followers": 25
    },
    {
        "firstName": "Fiona",
        "lastName": "Anderson",
        "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMV_V_M4tZ1XBwPtPVZfL8NOK6bdLD_3r9smpgLEvQBGhfwCRy8sImQZlLJ_at7UUvBrg&usqp=CAU",
        "coverImage": "https://example.com/fiona_cover.jpg",
        "email": "fiona.anderson@example.com",
        "password": "fionaPass789",
        "dateOfBirth": "1991-11-08",
        "type": "fashionista",
        "followers": 90
    },
    {
        "firstName": "George",
        "lastName": "Wilson",
        "profileImage": "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlZ-hstl2lXa9hh7I1sWp23rn_Qk0IQ5_809DQeVCIRA9__pQoQ7yuZXIo4UTNgMHUyM&usqp=CAU",
        "email": "george.wilson@example.com",
        "password": "georgePass123",
        "dateOfBirth": "1994-02-14",
        "type": "regular",
        "followers": 70
    },
    // Add more dummy user data here
];





const commentData = [
    {
        content: 'Great post!',
        postId: 1, // Replace with the actual post ID
        commenter: 1, // Replace with the actual user ID
    },
    {
        content: 'I love the picture!',
        postId: 1, // Replace with the actual post ID
        commenter: 2, // Replace with the actual user ID
    },
    {
        content: 'Nice view!',
        postId: 2, // Replace with the actual post ID
        commenter: 3, // Replace with the actual user ID
    },
    {
        content: 'Yum, what did you eat?',
        postId: 4, // Replace with the actual post ID
        commenter: 4, // Replace with the actual user ID
    },
    {
        content: 'Impressive code!',
        postId: 5, // Replace with the actual post ID
        commenter: 5, // Replace with the actual user ID
    },
    {
        content: 'Must have been an amazing hike!',
        postId: 6, // Replace with the actual post ID
        commenter: 6, // Replace with the actual user ID
    },
    {
        content: 'What game are you playing?',
        postId: 7, // Replace with the actual post ID
        commenter: 7, // Replace with the actual user ID
    },
    {
        content: 'Which book are you reading?',
        postId: 8, // Replace with the actual post ID
        commenter: 8, // Replace with the actual user ID
    },
    {
        content: 'Enjoy your relaxation time!',
        postId: 9, // Replace with the actual post ID
        commenter: 9, // Replace with the actual user ID
    },
    {
        content: 'Beautiful artwork!',
        postId: 10, // Replace with the actual post ID
        commenter: 10, // Replace with the actual user ID
    },
    {
        content: 'What s your favorite destination?',
        postId: 11, // Replace with the actual post ID
        commenter: 11, // Replace with the actual user ID
    },
    {
        content: 'Keep up the great work!',
        postId: 12, // Replace with the actual post ID
        commenter: 12, // Replace with the actual user ID
    },
];


// try {
//     await prisma.user.createMany({
//         data: dummyUsers,
//     });
//     await prisma.product.createMany({
//         data: productData
//     });
//     await prisma.userChatRoom.createMany({
//         data: userChatRoomData
//     });
//     await prisma.chatRoom.createMany({
//         data: chatRoomData
//     });
//     await prisma.message.createMany({
//         data: messageData
//     });
//     await prisma.post.createMany({
//         data: postData
//     });
//     await prisma.comment.createMany({
//         data: commentData
//     });
//     await prisma.category.createMany({
//         data: categoryData
//     });

//     console.log('Dummy users created successfully');
// } catch (error) {
//     console.error('Error creating dummy users:', error);
// } finally {
//     await prisma.$disconnect();
// }









module.exports = prisma    