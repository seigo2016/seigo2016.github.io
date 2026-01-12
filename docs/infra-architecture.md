# 自宅サーバー環境 アーキテクチャ図

このドキュメントは自宅サーバー環境プロジェクトのアーキテクチャ図のソースコードを保管しています。

## Mermaid Diagram

```mermaid
graph TB
    subgraph "Development"
        dev[Developer]
        git[Git Repository<br/>seigo2016/infra]
    end

    subgraph "Proxmox VE - Physical Host"
        subgraph "Kubernetes Cluster v1.32"
            cp[Control Plane<br/>4 core / 8GB RAM]
            w1[Worker 1<br/>4 core / 8GB RAM]
            w2[Worker 2<br/>4 core / 8GB RAM]

            subgraph "Infrastructure Services"
                flux[Flux CD<br/>GitOps Controller]
                longhorn[Longhorn<br/>Distributed Storage]
                ingress[Ingress NGINX<br/>L7 Load Balancer]
                vault[HashiCorp Vault<br/>Secret Management]
            end
        end
    end

    dev -->|1. Push Code| git
    git -->|2. Terraform<br/>VM Provisioning| cp
    git -->|2. Terraform<br/>VM Provisioning| w1
    git -->|2. Terraform<br/>VM Provisioning| w2
    git -->|3. Ansible<br/>k8s Setup<br/>CRI-O + Flannel| cp
    git -->|3. Ansible<br/>k8s Setup| w1
    git -->|3. Ansible<br/>k8s Setup| w2
    git -->|4. Flux watches<br/>10min interval| flux
    flux -.->|Deploy Manifests| cp

    cp ==>|Schedule Pods| w1
    cp ==>|Schedule Pods| w2

    longhorn -.->|Storage Backend| w1
    longhorn -.->|Storage Backend| w2
    vault -.->|Secrets| ingress

    style cp fill:#4a90e2,color:#fff
    style w1 fill:#4a90e2,color:#fff
    style w2 fill:#4a90e2,color:#fff
    style flux fill:#ff6b9d,color:#fff
    style longhorn fill:#00b894,color:#fff
    style vault fill:#ffd93d
```

## アーキテクチャ概要

- **物理ホスト**: Proxmox VE上で仮想化
- **Kubernetesクラスタ**: v1.32、CRI-O + Flannel CNI
- **IaC**: Terraform (VM構築) + Ansible (k8s構築)
- **GitOps**: Flux CD (10分間隔で自動同期)
- **ストレージ**: Longhorn分散ストレージ
- **シークレット管理**: HashiCorp Vault
- **Ingress**: NGINX Ingress Controller
