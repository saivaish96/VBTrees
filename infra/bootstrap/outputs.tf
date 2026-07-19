output "terraform_state_bucket" {
  description = "S3 bucket used for Terraform remote state."
  value       = aws_s3_bucket.terraform_state.bucket
}

output "github_actions_role_arn" {
  description = "IAM role assumed by GitHub Actions."
  value       = aws_iam_role.github_actions.arn
}

output "github_oidc_provider_arn" {
  description = "GitHub OIDC provider ARN."
  value       = local.github_oidc_provider_arn
}