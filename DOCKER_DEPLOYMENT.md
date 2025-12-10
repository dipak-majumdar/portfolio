# Docker Deployment Guide for VPS

## Prerequisites
- Docker and Docker Compose installed on VPS
- Git installed on VPS
- Domain name pointing to VPS (optional)

## Local Development

### Start Development Container
```bash
npm run docker:dev
```

### Start Development Container with Rebuild
```bash
npm run docker:dev-build
```

### Stop Containers
```bash
npm run docker:down
```

## Production Deployment

### Option 1: Direct Docker Compose Deployment

1. **Clone repository on VPS:**
   ```bash
   git clone <your-repo-url> /var/www/portfolio
   cd /var/www/portfolio
   ```

2. **Build and run production container:**
   ```bash
   npm run docker:prod-build
   ```

3. **Run in background:**
   ```bash
   docker-compose --profile prod up -d
   ```

### Option 2: Using Pre-built Image

1. **Build image locally:**
   ```bash
   docker build -t portfolio:latest .
   ```

2. **Push to registry (optional):**
   ```bash
   docker tag portfolio:latest your-username/portfolio:latest
   docker push your-username/portfolio:latest
   ```

3. **Deploy on VPS:**
   ```bash
   docker pull your-username/portfolio:latest
   docker run -d -p 80:80 --name portfolio portfolio:latest
   ```

## Environment Variables

Create `.env` file in project root:
```
NODE_ENV=production
VITE_API_URL=https://your-api.com
```

## SSL/HTTPS Setup

### Option 1: Using Let's Encrypt with Certbot

1. **Install Certbot:**
   ```bash
   sudo apt update
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Obtain SSL certificate:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

3. **Use HTTPS profile:**
   ```bash
   docker-compose --profile prod-https up -d
   ```

### Option 2: Manual SSL

1. **Place SSL certificates:**
   ```bash
   mkdir ssl
   # Copy your certificate files to ssl/
   # ssl/cert.pem and ssl/key.pem
   ```

2. **Update nginx.conf for HTTPS**

## Monitoring and Logs

### View logs:
```bash
docker-compose logs -f
```

### View specific service logs:
```bash
docker-compose logs -f app-prod
```

### Monitor container status:
```bash
docker ps
docker-compose ps
```

## Updates and Maintenance

### Update application:
```bash
git pull
npm run docker:prod-build
docker-compose --profile prod up -d
```

### Clean up unused images:
```bash
docker image prune -f
```

## Troubleshooting

### Common Issues:

1. **Port 80 already in use:**
   ```bash
   sudo lsof -i :80
   sudo kill -9 <PID>
   ```

2. **Build fails due to dependencies:**
   ```bash
   docker-compose --profile dev up --build
   # Check logs for specific errors
   ```

3. **Application not accessible:**
   ```bash
   # Check if container is running
   docker ps
   # Check nginx configuration
   docker exec <container-id> nginx -t
   ```

## Performance Optimization

### Enable gzip compression (already configured in nginx.conf)

### Set up caching:
- Static assets cached for 1 year
- HTML files cached appropriately

### Monitor resources:
```bash
docker stats
```

## Backup Strategy

### Backup application data:
```bash
# Export container
docker export portfolio > portfolio-backup.tar

# Backup nginx configuration
cp nginx.conf nginx.conf.backup
```

### Automated backup script:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
docker export portfolio > /backups/portfolio-$DATE.tar
```

## Security Considerations

1. **Regular updates:** Keep Docker and base images updated
2. **Minimal exposure:** Only expose necessary ports
3. **Security headers:** Already configured in nginx.conf
4. **Rate limiting:** Consider implementing rate limiting
5. **Firewall:** Configure UFW or similar

## Domain Configuration

### Point your domain to VPS:
- A record: @ -> VPS_IP
- A record: www -> VPS_IP

### Update server_name in nginx.conf:
```nginx
server_name yourdomain.com www.yourdomain.com;
```
