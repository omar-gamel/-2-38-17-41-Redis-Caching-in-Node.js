# Redis on Windows with WSL2

## What is Redis?

Redis is an open-source, in-memory data structure store that serves as a database, cache, and message broker. It offers high-performance, networked storage with optional durability. Redis supports various data structures such as strings, hashes, lists, sets, and sorted sets, making it adaptable for a wide range of use cases. Its simplicity, speed, and flexibility make it a popular choice for real-time applications, caching, session management, and task queuing.

## In-memory Databases

An in-memory database stores data entirely in main memory (RAM) instead of on disk. Leveraging the high speed of main memory, which is several orders of magnitude faster than disk storage, in-memory databases provide rapid access to data. They are commonly used in applications requiring fast access to large amounts of data, such as real-time analytics, online gaming, e-commerce, and social media. In-memory databases excel in handling high volumes of data and transactions without sacrificing performance.

![Redis](https://github.com/omar-gamel/Redis-Caching-in-Node.js/blob/main/image.PNG)

However, one drawback of in-memory databases is their sensitivity to data loss in the event of a crash or shutdown since data is stored entirely in memory and not persisted to disk. To address this, many in-memory databases, including Redis, offer features such as persistence and replication to ensure data durability and availability.

## Installing Redis on Windows for Development

Redis is not officially supported on Windows. However, you can install Redis on Windows for development by following the instructions below.

## Prerequisites

Before you begin, ensure that you have the following:

- Windows 10 version 2004 and higher or Windows 11.

## Installing WSL2

Before you can install Redis on Windows, you need to set up the Windows Subsystem for Linux 2 (WSL2). Follow these steps:

1. Restart your computer.

2. After restarting, open PowerShell as Administrator.

3. Run the following command to enable WSL:
   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```
   
4. Now, enable WSL2 by running the following command:   
   ```powershell
   wsl --set-default-version 2
   ```
5. Install your preferred Linux distribution from the Microsoft Store.
   - Open the Microsoft Store.
   - Search for your preferred Linux distribution (e.g., Ubuntu, Debian).
   - Click "Install" to download and install the distribution.
     
6. Launch the installed Linux distribution and follow the on-screen instructions to set it up.

## Installing Redis

Once you have WSL2 set up and running Ubuntu, follow these steps to install Redis:

1. Open your Linux terminal.

2. Run the following commands to install Redis:
   ```powershell
   sudo apt update
   sudo apt install redis-server
   ```
3. After installation, start the Redis server by running:
    ```powershell
   sudo service redis-server start
   ```
## Conclusion

With these steps, you can now install and use Redis on Windows for development purposes.
