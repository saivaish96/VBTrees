output "website_bucket_name" {
  description = "S3 bucket containing the Expo web application."
  value       = aws_s3_bucket.website.bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID."
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain name."
  value       = aws_cloudfront_distribution.website.domain_name
}

output "website_url" {
  description = "Public website URL."
  value       = "https://${aws_cloudfront_distribution.website.domain_name}"
}