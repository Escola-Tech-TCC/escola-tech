# AWS Infrastructure with CDK (TypeScript)

Este projeto tem como objetivo provisionar toda a infraestrutura de uma aplicação utilizando **AWS CDK com TypeScript**, seguindo boas práticas de arquitetura, modularização e Infraestrutura como Código (IaC).

A ideia é manter toda a infraestrutura versionada junto ao código, permitindo que qualquer alteração seja rastreada, revisada e implantada de forma automatizada.

---

# Arquitetura

A infraestrutura foi organizada em stacks independentes para facilitar a manutenção e reutilização dos componentes.

```
Internet
    │
Route53
    │
CloudFront
    │
AWS WAF
    │
Application Load Balancer
    │
Auto Scaling Group
    │
EC2
    │
Amazon RDS
```

Além da infraestrutura principal, também fazem parte do projeto:

- CloudWatch
- CloudTrail
- AWS Config
- CodePipeline
- CodeBuild
- Secrets Manager
- IAM
- Security Groups

---

# Estrutura do Projeto

```
.
├── bin
│   └── app.ts
│
├── lib
│
├── network
├── security
├── database
├── compute
├── distribution
├── monitoring
├── pipeline
│
└── common
```

Cada diretório representa um domínio da infraestrutura.

---

# Network Stack

Responsável por toda a camada de rede.

Recursos provisionados:

- VPC
- Internet Gateway
- NAT Gateway
- Public Subnets
- Private Subnets
- Database Subnets
- Route Tables
- VPC Endpoints

Essa stack é utilizada pelas demais.

---

# Security Stack

Centraliza todos os recursos relacionados à segurança.

Recursos provisionados:

- Security Groups
- IAM Roles
- Secrets Manager

Todos os demais componentes consomem recursos desta stack.

---

# Database Stack

Responsável pela camada de persistência.

Recursos provisionados:

- Amazon RDS PostgreSQL
- Multi-AZ
- DB Subnet Group
- Parameter Group
- Storage Encryption
- Backup Automático
- Performance Insights

---

# Compute Stack

Camada responsável pela execução da aplicação.

Recursos provisionados:

- Launch Template
- Auto Scaling Group
- EC2
- Application Load Balancer
- Target Group
- Listener

Essa stack utiliza os recursos criados nas stacks de Network, Security e Database.

---

# Distribution Stack

Responsável pela exposição da aplicação para a internet.

Recursos provisionados:

- CloudFront
- Route53
- ACM Certificate
- AWS WAF
- DNS Records

Toda a comunicação externa passa por esta camada.

---

# Monitoring Stack

Centraliza todos os recursos de observabilidade.

Recursos provisionados:

- CloudWatch Dashboard
- CloudWatch Alarms
- CloudTrail
- AWS Config
- SNS
- Log Groups

Seu objetivo é facilitar o monitoramento da infraestrutura e auxiliar na identificação de problemas.

---

# Pipeline Stack

Automatiza todo o processo de build e deploy.

Recursos provisionados:

- CodePipeline
- CodeBuild
- CodeStar Connection
- Artifact Bucket

Essa stack permite que alterações enviadas ao repositório sejam automaticamente construídas e implantadas.

---

# Ordem de Provisionamento

As stacks possuem dependências entre si, portanto devem ser criadas na seguinte ordem:

```
Network
      │
      ▼
Security
      │
      ▼
Database
      │
      ▼
Compute
      │
      ▼
Distribution
      │
      ▼
Monitoring
      │
      ▼
Pipeline
```

---

# Tecnologias Utilizadas

- AWS CDK
- TypeScript
- Amazon VPC
- Amazon EC2
- Amazon RDS
- Application Load Balancer
- Amazon CloudFront
- Route53
- AWS WAF
- AWS IAM
- AWS Secrets Manager
- Amazon CloudWatch
- AWS CloudTrail
- AWS Config
- CodePipeline
- CodeBuild

---

# Como executar

Instale as dependências:

```bash
npm install
```

Compile o projeto:

```bash
npm run build
```

Gerar o CloudFormation:

```bash
cdk synth
```

Realizar o deploy:

```bash
cdk deploy
```

Visualizar diferenças entre o código e a infraestrutura:

```bash
cdk diff
```

Destruir os recursos:

```bash
cdk destroy
```

---

# Boas práticas adotadas

Durante o desenvolvimento da infraestrutura foram adotadas algumas práticas para facilitar a manutenção e evolução do projeto:

- Separação da infraestrutura em stacks independentes.
- Reutilização de recursos entre stacks.
- Organização por domínio de responsabilidade.
- Infraestrutura totalmente versionada.
- Utilização de princípios de Infraestrutura como Código (IaC).
- Estrutura preparada para múltiplos ambientes (Development, Homologação e Produção).
- Recursos configurados pensando em escalabilidade e alta disponibilidade.

---

# Melhorias futuras

Este projeto foi estruturado para permitir evoluções futuras sem grandes alterações na arquitetura. Algumas melhorias previstas incluem:

- Deploy Blue/Green
- ECS/Fargate
- EKS
- Lambda para processos assíncronos
- Amazon ElastiCache
- Amazon SQS
- Amazon EventBridge
- Amazon OpenSearch
- AWS X-Ray
- AWS Shield Advanced
- AWS Backup
- Self Mutating Pipeline

---

# Objetivo

O principal objetivo deste projeto é servir como uma base sólida para provisionamento de infraestrutura AWS utilizando CDK, permitindo que novos recursos possam ser adicionados de maneira organizada e seguindo boas práticas de arquitetura em nuvem.

Toda a infraestrutura foi pensada para ser modular, reutilizável e de fácil manutenção, facilitando tanto o desenvolvimento quanto a evolução do ambiente ao longo do tempo.
